import axios from "axios"

const useAuth = () => {

  const baseURL = 'https://playlist-share-dev.fl0.io'

  const loginUser = (data) => {
    const url = `${baseURL}/api/auth/login`
    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const registerUser = (data) => {
    const url = `${baseURL}/api/auth/register`
    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return { loginUser, registerUser }
}

export default useAuth