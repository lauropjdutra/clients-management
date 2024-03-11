import { useState } from 'react'
import { Header } from './components/Header'
import { Wrapper } from './components/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Wrapper />
    </>
  )
}

export default App