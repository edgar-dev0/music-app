
const ArtistInfo = ({ artist }) => {
  return (
    <section>
      <header>
        <img src={artist?.images[1].url} alt="artist image" />
      </header>
      <article>
        <h2>{artist?.name}</h2>
        <p><span>Followers: </span>{artist?.followers.total}</p>
        <p><span>Popularity: </span>{artist?.popularity}</p>
        <p>
          <span>Genres:</span>
          <ul>
          {
            artist?.genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))
          }
          </ul>
        </p>
      </article>
    </section>
  )
}

export default ArtistInfo
