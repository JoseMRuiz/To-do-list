import React, { useState } from 'react'


const Cat = () => {
    const[cat,setCat] = useState ({name: "josesin" , year: 5})

    const handleClick = () => {

        setCat({...cat , year: cat.year +1})
        
    }

        return (
            <>
                <h2>{cat.name} - {cat.year}</h2>
                <button onClick={handleClick} className='btn btn-dark mb-2'> update year</button>
            
            </>
            
)
}

export default Cat;