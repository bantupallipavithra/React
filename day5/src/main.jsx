import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
   <Product />
    <Footer />
  </StrictMode>,
)
