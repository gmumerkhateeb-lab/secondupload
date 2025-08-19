import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='bg-red-300 h-[20vh] text-7xl text-center'>Welcome</h1>
      <p className='bg-red-500 text-5xl h-auto w-full text-center'>Lorem ipsum dolor sit amet consectetur  <br /> adipisicing
         elit. Corporis ea nemo rem.</p>

           <p className='bg-red-300 text-5xl h-auto w-full text-center'>Lorem ipsum dolor sit amet consectetur  <br /> adipisicing
         elit. Corporis ea nemo rem.</p>
    </div>
    </>
  )
}

export default App
