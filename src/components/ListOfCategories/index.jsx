import React from 'react'
import Category from '../Category'
import { Item, List } from './styles'

const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3].map((element, key) => (
        <Item key={key}>
          <Category />
        </Item>
      ))}
    </List>
  )
}

export default ListOfCategories
