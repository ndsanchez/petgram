import React from 'react'
import { Anchor, Image } from './styles'

const IMAGE_URL = 'https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'

const Category = ({ cover = IMAGE_URL, emoji = '?' }) => {
  return (
    <Anchor href='#'>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}

export default Category
