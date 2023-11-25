import React from 'react';
import { FaCheckDouble } from "react-icons/fa";





const TodoAlDia = () => {
    return (
        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

             <p style={{fontSize:'60px',color:'blue',fontWeight:'bold'}}>Todo al Día</p>
            <FaCheckDouble style={{fontSize:'80px',color:'limegreen',margin:'auto'}} />

        </div>
    );
}

export default TodoAlDia;