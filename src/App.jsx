import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(['aa', 'bb'])

  return (
    <>
      <Outlet />
    </>
  )
}
export default App
