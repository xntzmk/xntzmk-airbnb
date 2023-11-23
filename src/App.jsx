import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
      <Outlet />
    </>
  )
}
export default App
