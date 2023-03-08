import { Container } from "./style"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export function App() {
  return (
   <Container>
     <header>
      <Header/>
     </header>
     <main>
      <Outlet/>
     </main>
     <footer>
      <p>Web Development Course</p>
     </footer>
   </Container>
    
  )
}

