import React from 'react';
import Persons from './components/Persons'
import peopleService from './services/People'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }
   /*
  componentDidMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }
*/
  componentDidMount() {
    peopleService
      .getAll()
      .then(response => {
        this.setState({ persons: response.data })
      })
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
  
  removePerson = (id) => {
   return () => {
    const person = this.state.persons.filter((person) => person.id === id)
    console.log(person)
    const name = person[0].name
    console.log(name)
    let temp = ' '+ name
    let message = 'poistetaanko' + temp
    if (window.confirm(message)) { 
        
     peopleService
       .remove(id)
       .then(response => {
         this.setState({
           persons: this.state.persons.filter((person) => person.id !== id)
         })
       })
      
    
    }
  }
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
      
     const personObject = {
       name: this.state.newName,
       id: this.state.newName,
       number: this.state.newNumber
     }

     peopleService
     .create(personObject)
     .then(response => {
       this.setState({
         persons: this.state.persons.concat(response.data),
         newName: '',
         newNumber: ''
       })
     })
     
/*
     axios
     .post('http://localhost:3001/persons', personObject)
     .then(response => {
       this.setState({
         persons: this.state.persons.concat(response.data),
         newName: '',
         newNumber: ''
       })
     })

*/
   
     
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

          {persons.map(person => <Persons key={person.name} person={person} removePerson={this.removePerson(person.id)}/>)}
        </tbody>
       </table>
        
      </div>
    )
  }
}

export default App