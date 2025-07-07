import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginPost } from '../api/auth/authApi'
import { getCookie, removeCookie, setCookie } from '../util/cookieUtil,'

const initState = {
  email: '',
}

//createAsyncThunk()를 사용해서 loginPost() 호출
export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => {
  return loginPost(param)
})

//쿠키에서 로그인 정보 로딩
const loadMemberCookie = () => {
  const memberInfo = getCookie('member')

  //닉네임 처리
  if (memberInfo && memberInfo.userName) {
    memberInfo.userName = decodeURIComponent(memberInfo.userName)
  }

  return memberInfo
}

const loginSlice = createSlice({
  name: 'LoginSlice',
  initialState: loadMemberCookie() || initState, //쿠키가 없다면 초깃값사용
  reducers: {
    login: (state, action) => {
      console.log('로그인....')

      //{email, password 로 구성}
      const data = action.payload

      //새로운 상태
      return { email: data.email }
    },
    logout: (state, action) => {
      console.log('로그아웃...')
      removeCookie('member')
      return { ...initState }
    },
  },
  //비동기 통신상태에 따라 동작하는 코드 작성
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log('fulfilled')

        const payload = action.payload

        //정상적인 로그인시에만 저장
        if (!payload.error) {
          // 사용자 정보가 있다면 필요한 일부만 쿠키에 저장
          setCookie('member', JSON.stringify({ email: payload.email }), 1)
        }
        return payload
      })

      .addCase(loginPostAsync.pending, (state, action) => {
        console.log('pending')
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log('rejected')
      })
  },
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer
