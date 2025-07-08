// 저장 (유효시간은 분 단위로 설정. 기본은 영구 저장)
export const setStorage = (key, value, expireMinutes = null) => {
  const now = new Date().getTime()

  const item = {
    value,
    expire: expireMinutes ? now + expireMinutes * 60 * 1000 : null,
  }

  localStorage.setItem(key, JSON.stringify(item))
}

// 꺼내기 (만료되었으면 삭제 후 null 반환)
export const getStorage = (key) => {
  const raw = localStorage.getItem(key)
  if (!raw) return null

  try {
    const item = JSON.parse(raw)
    if (item.expire && new Date().getTime() > item.expire) {
      localStorage.removeItem(key)
      return null
    }
    return item.value
  } catch (e) {
    return null
  }
}

// 삭제
export const removeStorage = (key) => {
  localStorage.removeItem(key)
}
