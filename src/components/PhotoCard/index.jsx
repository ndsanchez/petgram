import React from 'react'
import { Button, Img, ImgWrapper } from './styles'
import { IoHeartOutline } from 'react-icons/io5'

const IMG_DEFAULT = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCard = ({ id, likes = 0, path, src = IMG_DEFAULT }) => {
  return (
    <article>
      <a href={path}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>

      <Button>
        <IoHeartOutline size={20} />
        {likes} likes!
      </Button>
    </article>
  )
}

export default PhotoCard
