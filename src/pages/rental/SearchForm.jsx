import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useInputs from '../../hooks/useInputs'

import { createSearchParams, useNavigate } from 'react-router-dom'
import Modal from '../../components/common/Modal'

const FormContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  > form {
    display: flex;
    gap: 10px;
    align-items: center;

    > select {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    > input {
      flex: 1;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    > button {
      padding: 8px 16px;
      background-color: #3b82f6;
      border: none;
      color: white;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #2563eb;
      }
    }
  }
`

const SearchForm = () => {
  const navigate = useNavigate()
  const [form, onChange, reset] = useInputs({
    type: 'title',
    keyword: '',
  })

  const { type, keyword } = form

  useEffect(() => {
    //React는 상태를 비동기적으로 처리하기 때문에 로그확인은 useEffect에서 하는게 정확하다.
    //console.log('form =', form)
  }, [form])

  const keywordRef = useRef()
  const [isOpen, setIsOpen] = useState(false) //모달창 열고 닫는 변수

  const clseModalFn = () => {
    setIsOpen(false)
    keywordRef.current.focus()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!keyword.trim()) {
      // alert('검색어가 입력되지 않았습니다.')
      setIsOpen(true) //모달창 열기

      keywordRef.current.focus()
      return
    }

    const queryString = createSearchParams({ type, keyword }).toString()
    console.log(`queryString = ${queryString}`)
    navigate(`/searchbook?${queryString}`)

    reset()
  }

  return (
    <>
      <Modal isOpen={isOpen} clseModalFn={clseModalFn} title="입력오류">
        검색어가 입력되지 않았습니다.
      </Modal>
      <FormContainer>
        <form onSubmit={onSubmit}>
          <select name="type" onChange={onChange} value={type}>
            <option value="title">도서명</option>
            <option value="author">저자명</option>
          </select>
          <input
            type="text"
            name="keyword"
            value={keyword}
            placeholder="검색어를 입력하세요"
            onChange={onChange}
            ref={keywordRef}
            autoComplete="off"
          />
          <button>검색</button>
        </form>
      </FormContainer>
    </>
  )
}

export default SearchForm
