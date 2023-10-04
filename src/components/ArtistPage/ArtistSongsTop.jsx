import TrackCard from "../HomePage/TrackCard"

const ArtistSongsTop = ({ tracks }) => {
  console.log(tracks)
  return (
    <article>
      <h3>Artist's Top Songs</h3>
      <section>
        <div>
          {
            tracks?.map(trackInfo => (
              <TrackCard
                key={trackInfo.id}
                track={trackInfo}
              />
            ))
          }
        </div>
      </section>
    </article>
  )
}

export default ArtistSongsTop
