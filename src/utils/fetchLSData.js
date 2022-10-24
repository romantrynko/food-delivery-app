export const fetchUser = () => {
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('item')) : localStorage.clear()

  return userInfo
}