import { Container } from "./style"
import { Outlet } from "react-router-dom"
import { Menu } from "../components/Menu"

export function App() {
  return (
   <Container>
     <header>
      <Menu/>
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

