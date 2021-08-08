import React from 'react'
import Category from '../Category'
import { Item, List } from './styles'
import { categories } from '../../../api/db.json'

const ListOfCategories = () => {
  return (
    <List>
      {categories.map(category => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}

export default ListOfCategories
