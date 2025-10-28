import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{margin: 0}}>Welcome to Tags App</h1>
      <p style={{color: "#444"}}>This example contains several HTML tags .</p>
      <marquee behavior="scroll" direction="left" style={{padding: "10px 0", background: "#ffeedd", borderRadius: 6}}>
Breaking: React app with multiple HTML tags! — Enjoy the old-school marquee.
</marquee>
      


<ul>
<li> heading</li>
<li>image</li>
<li>scrolling text</li>
<li> link</li>
<li> interactive button</li>
</ul>
<img src="https://media.istockphoto.com/id/533381303/photo/cherry-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=6BV79sui5Hc6lj555eV_ePiGlKfdZveIG9B5hIWidug=" alt="" width="200px"/>

<button onClick={() => alert("Button clicked in Tags App!")}>Submit</button>

    </>
  )
}

export default App
