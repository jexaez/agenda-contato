import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const CrudApi = () =>{
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/contatos";

    useEffect(()=> {
      api.get(url).then((res)=>{
        //console.log(res);
        if(!res.err){
          setDb(res)
        }else{
          setDb([])
        }
      })
    },[]);

    const createData = (data) => {
      data.id = Date.now();
      //console.log(data);
  
      let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
  
      api.post(url, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb([...db, res]);
        } else {
          //setError(res);
        }
      });
    };

    const updateData = (data) => {
      let endpoint = `${url}/${data.id}`;
      //console.log(endpoint);
  
      let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
  
      api.put(endpoint, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          let newData = db.map((el) => (el.id === data.id ? data : el));
          setDb(newData);
        } 
      });
    };

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el registro con el id '${id}'?`
      );
  
      if (isDelete) {
        let endpoint = `${url}/${id}`;
        let options = {
          headers: { "content-type": "application/json" },
        };
  
        api.del(endpoint, options).then((res) => {
          //console.log(res);
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } 
        });
      } else {
        return;
      }
    };
    return(
        <div>
            <CrudForm 
            createData= {createData} 
            updateData= {updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit} 
            />
            <CrudTable 
            data= {db}
            setDataToEdit={setDataToEdit}
            deleteData= {deleteData}
             />

        </div>
    );    
    
}

export default CrudApi