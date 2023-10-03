import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"

const TrackCard = ({ track }) => {

  const dispatch = useDispatch()
  const handleAddTrack = () => {
    dispatch(addTrack(track))
  }

  return (
    <div className='card'>
      <figure>
        <img className="card__image" src={track.album.images[1].url} alt="" />
      </figure>
      <section>
        <h3>{track.name}</h3>
        <ul>
          {
            track.artists.map(artist => (
              <li key={artist.id}>{artist.name}</li>
            ))
          }
        </ul>
      </section>
      <section>
        <a className="card__button" target="_blank" href={track.external_urls.spotify}>
          <i className='bx bxl-spotify'></i>
        </a>
        <button onClick={handleAddTrack} className="card__button">
          <i className='bx bx-plus-circle'></i>
        </button>
      </section>
    </div>
  )
}

export default TrackCard
