import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario.jsx";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";
import Swal from 'sweetalert2'
import TodoAlDia from "./TodoAldia.jsx";




function ListaDeTareas() {

  const [tareas, setTarea] = useState([]);
  const [hecho, setHecho] = useState(true)



  const agregarTarea = tarea => {

    
    if (tarea.texto.trim()) {
      /*tarea.texto=tarea.texto.trim();*/

      const tareasActualizadas = [tarea, ...tareas];
      setTarea(tareasActualizadas);
      setHecho(false) //add
    
    }
  }

  const eliminarTarea = (id) => {
    console.log('Eliminando tarea');
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTarea(tareasActualizadas);
    if (tareasActualizadas.length === 0) {
      setHecho(true)//add
      tareasActualizadas="" 
    }
  }


  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id == id) {
        tarea.completada = !tarea.completada;
        tarea.completada?tareaHecha():null//add
      }
      return tarea;
    }
    );
    setTarea(tareasActualizadas);
    
  }
const tareaHecha=()=>{ //add
  Swal.fire({
    text: 'Tarea hecha',
    background:'green',
    color:'white',
    width: '250px',
    timer: 3000,
    showCancelButton: false,
    showConfirmButton: false
  })
}
  const debesCompletarTarea = () => {//add
    Swal.fire({
      text: 'Aún sin hacer!!!',
      background:'red',
      color:'white',
      width: '250px',
      timer: 3000,
      showCancelButton: false,
      showConfirmButton: false
    })
  }


  //add ternario y estado bool + componente <TodoAlDia/>
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
    {!hecho ? <div>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={tarea.completada ? eliminarTarea : debesCompletarTarea}
              completarTarea={completarTarea}
            />

          )
        }

      </div> : <TodoAlDia />}
    </>

  )

}

export default ListaDeTareas;