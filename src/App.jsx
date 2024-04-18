import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Wishes from './components/Wishes'
import Gallery from './components/Gallery'
import Special from './components/Special'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

function App() {
  const [show, setShow] = useState(true)
  const {width, height} = useWindowSize()
  return (
    <>
      {show && <Confetti width={width} height={height} />}
      <Header show={show} setShow={setShow} />
      <Wishes />
      {show && <Confetti width={width} height={height} />}
      <Gallery />
      {show && <Confetti width={width} height={height} />}
      <Special />
    </>
  )
}

export default App
