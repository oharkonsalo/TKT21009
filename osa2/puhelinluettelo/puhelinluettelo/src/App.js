import React from 'react';
import Persons from './components/Persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
        
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }


  handleSearch = (event) => {
    console.log(event.target.value)
    this.setState({ filter: event.target.value })



  }



  
  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
    

  }
  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
    

  }

  addName = (event) => {
    event.preventDefault()
 /*
    var temp1 = this.state.persons.map(person => person.name)
    console.log(temp1)
    var index = temp1.indexOf(this.state.newName)
*/
    const alreadyExists = this.state.persons.find(f => f.name===this.state.newName)
    console.log(alreadyExists)
    if (alreadyExists===undefined) {
      
     const noteObject = {
       name: this.state.newName,
       id: this.state.newName,
       number: this.state.newNumber
     }
  
     const persons = this.state.persons.concat(noteObject)
    
     this.setState({
       persons,
       newName: '',
       newNumber: ''
       
     })
     console.log(persons)
    }   
    this.setState({
      newName: '',
      newNumber: ''
    })
   }

  
  render() {


  
    const persons =  this.state.persons.filter((person) => person.name.toLowerCase().search(this.state.filter.toLowerCase()) >= 0)

    console.log(persons)
    
  

    return (
      <div>
        <h2>rajaa näytettäviä</h2>
        <input 
            onChange={this.handleSearch}
            />
        <h2>Puhelinluettelo</h2>
        
        <form onSubmit={this.addName}>
          <div>
            nimi: <input 
            value={this.state.newName}
            onChange={this.handleNameChange}
            /><br></br>
            numero: <input 
            value={this.state.newNumber}
            onChange={this.handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <table>  
         <tbody>

          {persons.map(person => <Persons key={person.name} person={person} />)}
        </tbody>
       </table>
        
      </div>
    )
  }
}

export default App