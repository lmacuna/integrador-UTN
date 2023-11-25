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
      setHecho(false) //add agregando la primer tarea seteamos el valor de hecho en false para habilitar el comoponente <ListaDeTareas/> en planteo de condicional ternario
    
    }
  }

  const eliminarTarea = (id) => {
    console.log('Eliminando tarea');
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTarea(tareasActualizadas);
    if (tareasActualizadas.length === 0) {
      setHecho(true)//add cuando el length de las treas sea cro, osea esten todas hechas y eliminadas, setear valor del estado "hecho" como true para habilitar el componente <TodoAlDia/> en App.jsx
      tareasActualizadas="" 
    }
  }


  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id == id) {
        tarea.completada = !tarea.completada;
        tarea.completada?tareaHecha():null//add ternario para ejecutar una funcion, comunicarle al usuario con un modal que clickeo como hecha la tarea
      }
      return tarea;
    }
    );
    setTarea(tareasActualizadas);
    
  }
const tareaHecha=()=>{ //add alerta de tarea hecha
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
  const debesCompletarTarea = () => {//add alerta de que para eliminar la tarea debes hacerla primero
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


  //add planteo de condicional ternario y estado bool + componente <TodoAlDia/> en la primer tarea agregada dejamos de ver <TodoAlDia/> para ver las tareas
  //en la linea 91 vemos el planteo de condicional ternario como alternativa a la solucion del poder eliminar solo si esta clickeada como hecha la tarea de no ser asi se ejecuta la funcion con el modal de aun sin realizar
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