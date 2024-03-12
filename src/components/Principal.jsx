import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactos from './Contactos';
import { Link, useNavigate } from 'react-router-dom';



function Principal() {

    let historialContact = useNavigate();

    //funcion borra datos del contacto
    const handleDelete = (id) => {

        var index = Contactos.map(function (e) {
            return e.id
        }).indexOf(id);

        Contactos.splice(index, 1);

        historialContact('/');

    }
    return (
        <>

            <div style={{ margin: "10rem" }}>
            <Link className='d-grid gap-2' to= "/nuevo">
                <Button size="xlg" >Nuevo Contacto</Button>
                </Link>
                
                <br />
                <br />
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Direccion
                            </th>
                            <th>
                                Telefono
                            </th>
                            <th>
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Contactos && Contactos.length > 0
                                ?
                                Contactos.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.nombre}
                                            </td>

                                            <td>
                                                {item.direccion}
                                            </td>

                                            <td>
                                                {item.telefono}
                                            </td>

                                            <td>
                                                <Button size="xlg" onClick={() => handleDelete(item.id)}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Datos incorrectos"
                        }
                    </tbody>
                </Table>
                <br />
                
            </div>
        </>
    )
}

export default Principal;