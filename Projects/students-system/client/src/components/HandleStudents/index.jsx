import { Container } from "./style";
import axios from "axios";
import { useEffect, useState, } from "react";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

export function HandleStudents() {    
    const [listStudents, setListStudents] = useState([]);

    const API = "http://localhost:3000/students"

    function fetchStudents() {
        axios.get(API) 
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error));       
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    console.log(listStudents);

    return(
        <Container>
            <article>
                <section className="titleSearch">
                    <h1>Alunos</h1>
                    <div className="inputSection">
                        <input 
                        id = "inputSearchStudent"
                        type="text"
                        placeholder=" "
                        />
                        <label htmlFor="inputSearchStudent" className="labelInputSearch">
                            Buscar aluno
                        </label>
                        <BsSearch className="searchIcon"/>
                    </div>
                </section>

                <section className="tableStudents">
                <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Telefone</th>
          <th>Cidade</th>
          <th>Detalhes</th>
        </tr>
      </thead>
      <tbody>
        {listStudents &&
            listStudents.map((stundents) => {
                return (
                    <tr key={stundents.id}>
                        <td>{stundents.id}</td>
                        <td>{stundents.name}</td>
                        <td>{stundents.phone}</td>
                        <td>{stundents.city}</td>
                        <td>
                            <BiEdit className ="editIcon"/>
                        </td>
                    </tr>    

                )
            })
        }
            
      </tbody>
    </Table>
                </section>
            </article>
        </Container>
    )
}