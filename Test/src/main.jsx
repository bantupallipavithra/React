import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import StudentList from './StudentList.jsx'
import Profile from './Profile.jsx'
import MediaGallery from './MediaGallery.jsx'
import StyleCard from './Components/StyleCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <StudentList />
    <Profile /><br /><br />
    <MediaGallery />
    <StyleCard />
  </StrictMode>,
)
