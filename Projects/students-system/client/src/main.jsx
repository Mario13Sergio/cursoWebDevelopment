import React from 'react'
import ReactDOM from 'react-dom/client'
import { ResetStyled } from './styles/reset'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyled/>
      <RouterProvider router={routes}/>            
    </ThemeProvider>
  // </React.StrictMode>,
)
