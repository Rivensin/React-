import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './components/PasswordGenerator.jsx'


const reactElement = {
  type: 'a',
  props: {
    href : "https://google.com",
    target: "_blank"
  },
  childen:'click me to visit google'
}

const aReactElement = React.createElement(
  'a',
  {href: 'https:google.com', target: "_blank"},
  'click to visit google'
)

createRoot(document.getElementById('root')).render(
    <App />
    
  
)
