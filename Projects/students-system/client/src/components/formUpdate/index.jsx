import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export function FormUpdate({modalClose, studentData, fetchStudents}) {
  const [validated, setValidated] = useState(false);
  const [studentDataForm, setStudentDataForm] = useState ({
      id: studentData.id,
      name: studentData.name,
      email: studentData.email,
      phone: studentData.phone,
      city: studentData.city,
    });
    const API = "http://localhost:3000/students/"
    //   console.log(studentDataForm);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    updateStudent();
  };


  function updateStudent(){
      axios.put(API + `${studentData.id}`, studentDataForm)
        .then((res) => {
            alert(res.data);
            modalClose();
            fetchStudents();
        })
        .catch((error) => alert(error.response.data));
  }

  function deleteStudent(){
    const isDelete = confirm("Deseja deleta o aluno?");
    if(isDelete) {
        axios.delete(API + `${studentData.id}`)
            .then((res) => {
                alert(res.data);
                fetchStudents();
                modalClose();
            })
            .catch((error) => {
               alert(error.response.data);
            });
        
    }
  }

  function handleInputsChange(event){
    const {name, value} = event.target;
    setStudentDataForm({
        ...studentDataForm,
        [name]: value
    })
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <Row className="mb-3">
            <Form.Group as={Col} md="2" controlId="id">
            <Form.Label>ID</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="ID do aluno" 
                    required 
                    disabled
                    name="id"
                    value={studentDataForm.id}
                />
            <Form.Control.Feedback type="invalid">
            Campo Obrigatorio.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group  md="6" controlId="name">
            <Form.Label>Nome</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Nome de Aluno" 
                    required 
                    name="name"
                    value={studentDataForm.name}
                    onChange={handleInputsChange}
                />
            <Form.Control.Feedback type="invalid">
            Campo Obrigatorio.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>

        <Row className="mb-3">
            <Form.Group  md="3" controlId="email">
            <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Digite seu email!" 
                    required 
                    name = "email"
                    value={studentDataForm.email}
                    onChange={handleInputsChange}
                />
            <Form.Control.Feedback type="invalid">
                Campo Obrigatorio.
            </Form.Control.Feedback>
            </Form.Group>
        </Row>


        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="phone">
            <Form.Label>Telefone</Form.Label>
                <Form.Control 
                    type="tel" 
                    placeholder="Telefone do aluno" 
                    required 
                    name = "phone"
                    value={studentDataForm.phone}
                    onChange={handleInputsChange}
                />
            <Form.Control.Feedback type="invalid">
                Campo Obrigatorio.
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="city">
            <Form.Label>Cidade</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Cidade do aluno" 
                    required 
                    name = "city"
                    value={studentDataForm.city}
                    onChange={handleInputsChange}
                />
            <Form.Control.Feedback type="invalid">
                Campo Obrigatorio.
            </Form.Control.Feedback>
            </Form.Group>
            
      </Row>

      <Modal.Footer>
        <Button variant="danger" onClick={deleteStudent}>
        Delete
        </Button>
      <Button type="submit" variant = "success">
        Atualizar
      </Button>
        
        </Modal.Footer>
    </Form>
  );
}

