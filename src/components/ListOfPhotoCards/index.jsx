import React from 'react'
import PhotoCard from '../PhotoCard'
import { photos } from '../../../api/db.json'

const ListOfPhotoCards = () => {
  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export default ListOfPhotoCards
