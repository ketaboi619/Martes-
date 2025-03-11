import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './PanelControl'
import MenuLateral from './MenuLateral'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl />
  </StrictMode>,
)


