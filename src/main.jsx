import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.jsx'
import { GlobalProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalProvider>
  </React.StrictMode>,
)
