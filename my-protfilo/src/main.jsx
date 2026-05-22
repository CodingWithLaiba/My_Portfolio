import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TooltipProvider } from "@/components/ui/tooltip"

ReactDOM.createRoot(document.getElementById('root')).render(
  <TooltipProvider>
    <App />
  </TooltipProvider>
)
