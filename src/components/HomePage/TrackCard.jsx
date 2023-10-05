import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"
import { Link, useNavigate } from "react-router-dom"

const TrackCard = ({ track }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleAddTrack = () => {
    dispatch(addTrack(track))
  }

  const handleArtist = (id) => {
    navigate(`/artist/${id}`)
  }

  return (
    <div className='card'>
      <figure>
        <img className="card__image" src={track.album.images[1].url} alt="" />
      </figure>
      <section>
        <Link to={`/track/${track.id}`}><h3>{track.name}</h3></Link>
        <ul>
          {
            track.artists.map(artist => (
              <li 
                onClick={() => handleArtist(artist.id)}
                key={artist.id}>{artist.name}
              </li>
            ))
          }
        </ul>
      </section>
      <section className="card__container__buttons">
        <a className="card__button" target="_blank" href={track.external_urls.spotify}>
          <i className='bx bxl-spotify'></i>
        </a>
        <button className="card__button" onClick={handleAddTrack}>
          <i className='bx bx-plus-circle'></i>
        </button>
      </section>
    </div>
  )
}

export default TrackCard
