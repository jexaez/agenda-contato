import React from "react";
import CrudTableRow from "./CrudTableRow"

const CrudTable = ({ data, setDataToEdit,deleteData }) =>{
    
        return(
            <div>
                <h3>Tabla de Datos</h3>
                <table>
                    <thead>
                    <tr>
                        <th>NOME -EMAIL -TELEFONE -OPÇOES</th>
                        
                        
                    </tr>
                    </thead>
                    <tbody>
                    {data.length === 0 ?(
                     <tr>
                        <td colSpan = "4" >Sim dados</td> 
                    </tr>
                ):(
                    data.map((el) =>(
                    <CrudTableRow
                     key={el.id}
                     el={el} 
                     setDataToEdit = {setDataToEdit}
                     deleteData = {deleteData} 
                     />))
                )}                    
                </tbody>
                </table>
            </div>
        )   
}

export default CrudTable;