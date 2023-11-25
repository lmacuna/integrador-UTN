import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {

  
  const [input, setInput]=useState('');

  const manejarCambio = e => {
    
    setInput(e.target.value);
           
  }

  const manejarEnvio= (e) => {
       
    e.preventDefault();
    const tareaNueva={
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
    return(e.target.reset(),setInput("")) //add vaciar input y vaciar el valor del estado del input
        
  }
 

  return(
      <form className="tarea-formulario" onSubmit={manejarEnvio}>
        <input autoFocus 
          className="tarea-input"
          type='texto'
          placeholder='Ingrese una Tarea'
          onChange={manejarCambio}      
        />
        <button className='tarea-boton' >
          Agregar Tarea
        </button >
      </form>
    )
}

export default TareaFormulario;