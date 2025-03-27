import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './Blogs.jsx'
// import './Home.jsx'
import App from './App'
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
