import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Component1 } from './Count/Component1'
import { Component2 } from './Count/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component1 />
     <Component2 />
    </>
  )
}

export default App
