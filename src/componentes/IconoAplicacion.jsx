import React from 'react';
import '../hojas-de-estilo/IconoAplicacion.css'


const IconoAplicacion = () => {
    return ( 
        <div style={{display:'flex',justifyContent:'start',alignItems:'center'}}>
          <img className='icono-aplicacion' src='utn.png' alt='icono de la aplicacion'></img> <h2>Argentina programa 4.0</h2>
        </div>
     );
}
 
export default IconoAplicacion;