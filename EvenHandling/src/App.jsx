import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Method1} from "./Method1"
import {Method2} from "./Method2"
import {Method3} from './Method3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Method1 /><br /><br />
      <Method2 /><br /><br />
      <Method3 />

    </>
  )
}

export default App
