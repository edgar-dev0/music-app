import { useSelector } from "react-redux"
import TrackList from "./TrackList"
import { useForm } from "react-hook-form"
import usePlaylist from "../../hooks/usePlaylist"
import { useState } from "react"

const HeaderMusic = () => {

  const tracksPlayList = useSelector(store => store.tracks)

  const [isShowForm, setIsShowForm] = useState(false)
  const { reset, handleSubmit, register } = useForm()
  const { postPlaylist } = usePlaylist()

  const handleRecording = () => {
    setIsShowForm(!isShowForm)
  }

  const submit = data => {
    console.log(data)
    const obj = {
      ...data,
      tracks: tracksPlayList.map(track => ({id: track.id}))
    }
    console.log(obj)
    postPlaylist(obj)
    reset({
      title: '',
      to: '',
      message: ''
    })
  }

  return (
    <header className='header__container'>
      <h1><i className='bx bxl-spotify'></i>Gift music</h1>
      <button className="header__container__button" onClick={handleRecording}>Recording</button>
      {
        isShowForm
          ? (
            <div className="header__form__container">
              <form onSubmit={handleSubmit(submit)}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input {...register('title')} type="text" id="title" />
                </div>
                <div>
                  <label htmlFor="to">To</label>
                  <input {...register('to')} type="text" id="to" />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea {...register('message')} id="message" />
                </div>
                <div>
                  {
                    tracksPlayList.map(track => (
                      <TrackList
                        key={track.id}
                        track={track}
                      />
                    ))
                  }
                </div>
                <button>Create</button>
              </form>
            </div>
          )
          :
            null
      }
      
    </header>
  )
}

export default HeaderMusic
