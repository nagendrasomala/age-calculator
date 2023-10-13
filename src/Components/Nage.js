import React, { useState } from 'react'

export default function Nage() {
    const [dob,setdob] = useState('');
    const [age,setage] = useState(0);

    const handle = (e) =>{
        const dobDate = new Date(dob);
        const currentDate = new Date();
        const ageDiff = Math.abs(currentDate.getFullYear() - dobDate.getFullYear());
        setage(ageDiff);
        
    }
  return (
    <div>
      <div className='con'>
        <h2>Age Calculator</h2>
        <p>Enter Your Date Of Birth</p>
        <input className='box' type='date' value={dob} onChange={(e) => setdob(e.target.value)}  /> <br/>
        <input type='submit' onClick={(e) => handle(e)} className='btn' placeholder='Calculate Age'/>
        <h3>Your are {age} Years Old</h3>

      </div>
    </div>
  )
}
