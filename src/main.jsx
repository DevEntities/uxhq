import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import './assets/fonts/fonts.css';
import './assets/fonts/fonts.css'
import App from './App.jsx'

import ScreenInfo from './components/ScreenInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ScreenInfo /> */}
    <App />
  </StrictMode>,
)