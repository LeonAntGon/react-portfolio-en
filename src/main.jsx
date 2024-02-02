import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Title from "./frames/Title.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title title="Portfolio - Leonardo" /> <App />
  </React.StrictMode>,
)