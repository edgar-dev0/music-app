import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/HomePage/TrackCard"
import { useSelector } from "react-redux"
import store from "../store"

const HomePage = () => {

  const [ listTracks, getListTracks ] = useFetch()
  const [ inputValue, setInputValue ] = useState('limpbizquit')
  const [ quantityPerPage, setQuantityPerPage ] = useState(10)
  
  useEffect(() => {
    getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
  }, [inputValue, quantityPerPage])

  console.log(listTracks)

  const inputSearch = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const handleTracksPerPage = e => {
    setQuantityPerPage(e.target.value)
  }

  const tracksPlaylist = useSelector(store => store.tracks)
  console.log(tracksPlaylist)

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <input ref={inputSearch} type="text" />
          <select onChange={handleTracksPerPage} defaultValue={10}>
            {
              [3, 5, 10, 20].map(tracksPerPage => (
                <option
                  key={tracksPerPage}
                  value={tracksPerPage}
                >{tracksPerPage}</option>
              ))
            }
          </select>
        </form>
        <div>
          {
            listTracks?.tracks.items.map(track => (
              <TrackCard 
                  key={track.id}
                  track={track}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage