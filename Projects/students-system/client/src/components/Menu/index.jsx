import { NavLink } from "react-router-dom"
import { Container } from "./styled"

export function Menu() {
    return(
        <Container>
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"className={({isActive}) => isActive ? "select" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register"className={({isActive}) => isActive ? "select" : ""} >Cadastro</NavLink>
                    </li>
                    <li>
                        <NavLink to="/students"className={({isActive}) => isActive ? "select" : ""}>Alunos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"className={({isActive}) => isActive ? "select" : ""}>Sobre</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
        </Container>

    )
}