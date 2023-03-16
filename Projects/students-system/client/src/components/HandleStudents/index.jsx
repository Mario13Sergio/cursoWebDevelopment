import { Container } from "./style";
import axios from "axios";
import { useEffect, useState, } from "react";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormUpdate } from "../formUpdate";

export function HandleStudents() {    
    const [listStudents, setListStudents] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [studentData, setStudentData] = useState([]);

    const modalOpen = (studentID) => {
        setshowModal (true)
        const student = listStudents.findIndex(student => student.id == studentID);
        setStudentData(listStudents[student]);
    };
    console.log(studentData);
    const modalClose = () => setshowModal (false)

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
                            <BiEdit className ="editIcon" onClick=
                            {() => modalOpen(stundents.id)}/>
                        </td>
                    </tr>    

                )
            })
        }
            
      </tbody>
    </Table>
                </section>
                <section>
                    <Modal show={showModal} onHide={modalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Aluno</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormUpdate modalClose = {modalClose} 
                            studentData={studentData}
                            />
                        </Modal.Body>
                        
                    </Modal>
                </section>
            </article>
        </Container>
    )
}