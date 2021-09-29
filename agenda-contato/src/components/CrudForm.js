import React, { useState, useEffect } from "react";
import {Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const initialForm = {
    nome: "",
    email: "",
    telefone: "",
    id:null,
  };
const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) =>{
    const [form, setForm] = useState(initialForm);

    useEffect( ()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm)
        }

    }, [dataToEdit]);
    
    const handleChange =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    const handleSubmit =(e)=>{
        e.preventDefault();

        if(!form.nome || !form.email || !form.telefone ){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form)
           } else{
            updateData(form);
           }
        

        handleReset();
    }

    const handleReset =(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }  

        return(
            <div>
                <h3>{dataToEdit? "Editar": "Agregar"}</h3>
                <Form onSubmit= {handleSubmit}>
                <FormGroup>
                <Label for="exampleName">Nome</Label>
                <Col sm={4}>
                <Input type="nome" 
                name="nome"
                 id="exampleName"
                  placeholder="Nome" 
                  onChange={handleChange} 
                  value= {Form.nome} />
                </Col>
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Col sm={4}>
                <Input type="email" 
                name="email" 
                id="exampleEmail"
                 placeholder="email.exemplo.com" 
                 onChange={handleChange} 
                 value= {Form.email}/>
                </Col>
                </FormGroup>
                <FormGroup>
                <Label for="exampleTelefone">Telefone</Label>
                <Col sm={4}>
                <Input type="telefone"
                 name="telefone" 
                 id="exampleTelefone" 
                 placeholder="00 00000-0000" 
                 onChange={handleChange} 
                 value= {Form.telefone} />
                </Col>
                </FormGroup>
                <br/>
                <div>
                <input color="primary" type= "submit" value ="Enviar"/>{' '}
                <input  color="secondary"type= "reset" value ="Limpiar" onClick={handleReset} />{' '}
                </div>     
            </Form>
        </div>
        )    
}

export default CrudForm;
