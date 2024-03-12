import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactos from './Contactos';
import { v4 as uuid } from "uuid";
import {Link, useNavigate} from 'react-router-dom';

//Funcion agrega nuevo contacto

function Nuevo () {
    
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    
    let historialContact = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();

        let uniqueId = ids.slice(0,8);
        let a = nombre,
            b = direccion,
            c = telefono;


        Contactos.push({ id: uniqueId, nombre: a, direccion: b, telefono: c });

        historialContact("/");

    }
    return 
    
    <div>
        <Form className="d-grid grap-2" style={{ margin: "10rem" }}>
            <Form.Group className='mb-3' controlId="formnombre">
                <Form.Control type="text" placeholder='Nombre' required onChange={(e) => setNombre(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formdireccion">
                <Form.Control type="text" placeholder='Direccion' required onChange={(e) => setDireccion(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formtelefono">
                <Form.Control type="text" placeholder='Telefono' required onChange={(e) => setTelefono(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Agregar</Button>
        </Form>

    </div>;


}

export default Nuevo;