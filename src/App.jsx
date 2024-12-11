
import Navbar from './Components/Navbar'
import React, { useState } from 'react'
import NewsBoard from './Components/NewsBoard'
import NewsItem from './Components/NewsItem'

const App = () => {

  const [category,SetCategory] = useState("general");

  return (
    <>
    <Navbar setCategory={SetCategory} />
    <NewsBoard category={category}/>
    <NewsItem/>
    </>
  )
}

export default App