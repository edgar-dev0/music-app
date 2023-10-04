import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import TrackInfo from "../components/TrackPage/TrackInfo"
import TrackRelated from "../components/TrackPage/TrackRelated"

const TrackPage = () => {

  const { id } = useParams()

  const [ track, getTrack ] = useFetch()

  useEffect(() => {
    getTrack(`/api/tracks/${id}`)
  }, [id])

  console.log(track)

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)     //el valor -1 te devuelve una pagina atras
  }

  return (
    <div>
      TrackPage
      <div onClick={handleBack}>Back</div>
      <TrackInfo
        track={track}
      />
      <TrackRelated 
        artist={track?.artists[0]}
      />
      
    </div>
  )
}

export default TrackPage