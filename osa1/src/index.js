import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1
      })
    }
    klikNeutraali = () => {
        this.setState({
        neutraali: this.state.neutraali + 1
        })
      }
    klikHuono = () => {
      this.setState({
        huono: this.state.huono + 1
      })
    }
  
    render() {
      const keskiArvo = () => {
            
            return (this.state.hyva * 1 + this.state.neutraali * 0 + this.state.huono * -1) / (this.state.hyva + this.state.neutraali + this.state.huono)
      }

      return (
        <div>
          <div>
          <h1>Anna palautetta</h1>
            <button onClick={this.klikHyva}>Hyvä</button>
            <button onClick={this.klikNeutraali}>Neutraali</button>
            <button onClick={this.klikHuono}>Huono</button>
            <h1>Statistiikka</h1>

            <p>Hyvä {this.state.hyva}</p>
            <p>Neutraali {this.state.neutraali}</p>
            <p>Huono {this.state.huono}</p>
            <p>Keskiarvo {((this.state.hyva * 1) + (this.state.neutraali * 0) + (this.state.huono * -1))/(this.state.hyva + this.state.neutraali + this.state.huono)}</p>
            <p>Positiivisia {(this.state.hyva / (this.state.neutraali + this.state.huono + this.state.hyva))*100}</p>
          </div>
        </div>
      )
    }
  }


  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)