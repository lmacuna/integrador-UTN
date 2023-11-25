import './App.css'
import ListaDeTareas from './componentes/ListaDeTareas.jsx'
import IconoAplicacion from './componentes/IconoAplicacion.jsx'

function App() {
 

  return (
    <div className='main'>
      <header>
           <h1>Lista de tareas</h1>
      </header>
      <div className='box-icon-aplicacion'><IconoAplicacion/> </div>
       
      <ListaDeTareas/>

    </div>
  )
}

export default App;
