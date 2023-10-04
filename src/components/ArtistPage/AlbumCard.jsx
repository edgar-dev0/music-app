
const AlbumCard = ({ album }) => {

  const yearReleaseDate = (new Date(album.release_date)).getFullYear()

  return (
    <article>
      <header>
        <img src={album.images[1].url} alt="album image" />
      </header>
      <section>
        <h4>{album.name}</h4>
        <span>{yearReleaseDate}</span>
      </section>
    </article>
  )
}

export default AlbumCard
