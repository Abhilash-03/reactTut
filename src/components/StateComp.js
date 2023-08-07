import React, { useState } from 'react'

function StateComp() {


    const [names, setNames] = useState('Mongo');

    const handleArrayChange = ()=>{
        const name = ['Mongo', 'React', "Nodejs", 'Expressjs'];
        const rand = Math.floor(Math.random()* name.length);
        setNames( name[rand]);
      }
  return (
    
    <div className='nameContainer'>
    <h1>Hello Mern stack - {names}!</h1>
      <button onClick={handleArrayChange}>Change Name</button>

    </div>
  )
}

export default StateComp
