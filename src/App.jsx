import { useState } from 'react'
import './App.css'

import Nav from './App/Nav'
import Header from './App/Header'
import About from './App/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Header />
      <About />
    </>
  )
}

export default App
