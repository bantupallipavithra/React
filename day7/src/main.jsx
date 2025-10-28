import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Media} from './Media'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Media />
  </StrictMode>,
)
