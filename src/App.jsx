import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='bg-red-300 h-[20vh] text-7xl text-center'>Welcome</h1>
      <p className='bg-red-500 text-5xl w-full text-center'>Lorem ipsum dolor sit amet consectetur adipisicing
         elit. Corporis ea nemo rem.</p>
    </div>
    </>
  )
}

export default App
