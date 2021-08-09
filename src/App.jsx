import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import Logo from './components/Logo'
import { GlobalStyle } from './GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
