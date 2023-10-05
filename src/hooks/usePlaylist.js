import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import axios from "axios"

const usePlaylist = () => {

  const [playList, setPlayList] = useState()

  const baseUrl = 'https://playlist-share-dev.fl0.io'

  const getPlaylist = () => {
    url = `${baseUrl}/api/playlist/me`
    axios.get(url, getConfigToken())
      .then(res => setPlayList(res.data))
      .catch(err => console.log(err))
  }

  const postPlaylist = (data) => {
    const url = `${baseUrl}/api/playlist`
    axios.post(url, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setPlayList([ ...playList, res.data.info ])
      })
      .catch(err => console.log(err))
  }

  const deletePlaylist = (id) => {
    const url = `${baseUrl}/api/playlist/${id}`
    axios.delete(url, getConfigToken())
      //.then(res => res.data.filter(id))
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return { playList, getPlaylist, postPlaylist, deletePlaylist }
}


export default usePlaylist
