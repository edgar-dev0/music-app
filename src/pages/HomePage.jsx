import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const HomePage = () => {

  const [ tracks, getTracks ] = useFetch()
  
  useEffect(() => {
    getTracks('/api/tracks/recommendations?seed_genres=rock')
  }, [])

  console.log(tracks)

  return (
    <div>
      <h1>HomePage</h1>
      <div>
        <input type="text" />
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default HomePage