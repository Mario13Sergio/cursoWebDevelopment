import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ResetStyled } from "./styles/reset.js"
import { theme } from './styles/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from "./routes"
import { Header } from './components/Header/index.jsx'
import  Footer  from "./components/Footer/index.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme = {theme}>
    <ResetStyled/>
    <Header/>
    <RouterProvider router = {routes}/>
    <Footer/>
  </ThemeProvider>
)
