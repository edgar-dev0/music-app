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
      <div className="tracks__container">
        <form className="tracks__container__form" onSubmit={handleSearch}>
          <div className="search__container">
            <i class='bx bx-search-alt-2'></i>
            <input ref={inputSearch} type="text" placeholder=""/>
          </div>
          <select onChange={handleTracksPerPage} defaultValue={10}>
            {
              [3, 5, 10, 20].map(tracksPerPage => (
                <option className="form__select__option"
                  key={tracksPerPage}
                  value={tracksPerPage}
                >{tracksPerPage}</option>
              ))
            }
          </select>
        </form>
        <div className="tracks__container__list">
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