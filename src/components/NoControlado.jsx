import React, { useRef, useState } from 'react'

const NoControlado = () => {
    

    const form = useRef(null)
    const[ error , setError] = useState("");


    const handlesubmit = (e) => {
        e.preventDefault();

        setError('')
;        //capturar datos

        const data = new FormData(form.current);
        const { title, description , state} = Object.fromEntries ([
            ...data.entries(),
        ]);
    
        
        // validar los datos 
        if (!title.trim() || !description.trim() || !state.trim())
            return setError("llena este campo");

        // enviar los datos 
        console.log(title, description, state);
    }



return (
    <form onSubmit={handlesubmit} ref={form}>
        <input 
        type="text" 
        placeholder='Ingrese Todo' 
        className='form-select mb-2'
        name='title'
        defaultValue="todo #01"
        />

        <textarea 
        className='form-select mb-2' 
        placeholder='ingrese descripcion'
        name='description'
        defaultValue="descripcion #01"
        />
        <select className='form-select mb-2' name='state'  defaultValue="completado">
            <option value="pendiente" >Pendiente</option>
            <option value="completado">Completado</option>
        </select>
        <button type='submit' className='btn btn-primary'>Procesar</button>
        {
            error !== '' && error 
        }
    </form>
)
}

export default NoControlado