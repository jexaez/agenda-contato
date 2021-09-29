import React from 'react'
import CrudApi from './CrudApi';



export default class extends React.Component{
    render(){
        return(
            <div>
                <h2>Agenda de Contactos</h2>
                <CrudApi/>   
            </div>
        )
    }
}