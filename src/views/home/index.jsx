import React, { memo } from 'react'

const Home = memo(() => {
  return (
    <div>
      <p className="font-700 text-pink-500">Home</p>
    </div>
  )
})

Home.displayName = 'Home'

export default Home
