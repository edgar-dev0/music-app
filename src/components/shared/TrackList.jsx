import { useDispatch } from 'react-redux'
import { deleteTrack } from '../../store/slices/tracks.slice'


const TrackList = ({ track }) => {

  const dispatch = useDispatch()

  const handleRemoveTrack = () => {
    dispatch(deleteTrack(track))
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
        <button className="card__button" onClick={handleRemoveTrack} >
          <i class='bx bx-minus-circle'></i>
        </button>
      </section>
    </div>
  )
}

export default TrackList
