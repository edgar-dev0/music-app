import React from 'react'
import AlbumCard from './AlbumCard'

const ArtistAlbum = ({ artist }) => {
  return (
    <section>
      <h3>Artist's Album</h3>
      <div>
        {
          artist?.albums.map(albumInfo => (
            <AlbumCard
              key={albumInfo.id}
              album={albumInfo}
            />
          ))
        }
      </div>
    </section>
  )
}

export default ArtistAlbum
