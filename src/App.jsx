import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Wishes from './components/Wishes'
import Gallery from './components/Gallery'
import Special from './components/Special'
import Confetti from 'react-confetti'

function App() {
  const [show, setShow] = useState(true)
  return (
    <>
      {show && <Confetti width={1500} height={2500} />}
      <Header show={show} setShow={setShow} />
      <Wishes />
      {show && <Confetti width={1000} height={2500} />}
      <Gallery />
      {show && <Confetti width={1000} height={2500} />}
      <Special />
    </>
  )
}

export default App
