import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import axios from "axios"

const usePlaylist = () => {

  const [playList, setPlayList] = useState()

  const baseURL = 'https://playlist-share-dev.fl0.io'

  const getPlaylist = () => {
    url = `${baseURL}/api/playlists/me`
    axios.get(url, getConfigToken())
      .then(res => setPlayList(res.data))
      .catch(err => console.log(err))
  }

  const postPlaylist = (data) => {
    const url = `${baseURL}/api/playlists`
    axios.post(url, data, getConfigToken())
      .then(res => {
        console.log(res.data)
        setPlayList([ ...playList, res.data.info ])
      })
      .catch(err => console.log(err))
  }

  const deletePlaylist = (id) => {
    const url = `${baseURL}/api/playlists/${id}`
    axios.delete(url, getConfigToken())
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return { playList, getPlaylist, postPlaylist, deletePlaylist }
}


export default usePlaylist
