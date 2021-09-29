import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) =>{ 
    let {nome,email,telefone,id}  = el;
        return(
            
            <div>
                <tr>
                    <td> {nome} </td>
                    <td> {email}</td>
                    <td> {telefone}</td>
                    <td>
                        <button onClick={() => setDataToEdit(el)}>Editar</button>
                        <button onClick={() => deleteData(id)}>Deletar</button>
                    </td>
                </tr>
            </div>
           
        )
    

}
export default CrudTableRow;