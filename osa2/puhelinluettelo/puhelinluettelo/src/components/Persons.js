import React from 'react';

const Persons = ({ person }) => {
    
    return (

       <tr>
        <td>{person.name}</td>
        <td> {person.number}</td>
       </tr>

    )
  }

  export default Persons