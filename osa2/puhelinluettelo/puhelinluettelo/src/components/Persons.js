import React from 'react';

const Persons = ({ person, removePerson }) => {
    
    return (

       <tr>
        <td>{person.name}</td>
        <td> {person.number}</td>
        <td><button onClick={removePerson}>remove</button></td>
       </tr>

    )
  }

  export default Persons