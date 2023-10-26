import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(['aa', 'bb'])

  return (
    <>
      <h3 text='lg teal' font='600'>App</h3>
      <button text="lg red-300">你好</button>
      <div flex="~" items-center font-300 w-2xl h-full>
        {
          movies.map(c => <div key={c} className='item'>{c}</div>)
        }
      </div>
    </>
  )
}
export default App
