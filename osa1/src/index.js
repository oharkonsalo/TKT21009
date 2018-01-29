import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]

      
    }
    

    } 
    klikNext = () => {
      this.setState({
        selected: Math.floor(Math.random() * (5 - 0 + 1)) + 0
       
      })
    }
    klikVote = () => {

      let temp = this.state.pisteet
      temp[this.state.selected] = temp[this.state.selected] + 1  

      this.setState({

        pisteet: temp
       
      })
    }



  render() {
    
    const MostVotes = () => {
      let temp = this.state.pisteet
      let suurin = temp.indexOf(Math.max(...this.state.pisteet))   
      return <div>{this.props.anecdotes[suurin]}</div>
    }


    return (
      <div>
        {this.props.anecdotes[this.state.selected]}<b> has {this.state.pisteet[this.state.selected]} votes</b>
       <br></br><button onClick={this.klikVote}>vote anecdote</button> <button onClick={this.klikNext}>next anecdote</button>
        <br></br> <h1>anecdote with most votes:</h1><br></br><MostVotes />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)