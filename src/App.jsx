import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import { useSelector } from 'react-redux'

function App() {
const count = useSelector((state) => state.counter.value)  

  return (
    <>
    <div>{count}</div>
     <Counter/>
    </>
  )
}

export default App
