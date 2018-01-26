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
      const Button = ({ handleClick, text }) => (
            <button onClick={handleClick}>
              {text}
            </button>
       )
       const Statistics = ({ luku, text }) => {
        return (
            <p>{text} {luku}</p>
        )
       } 
       const Statistic = ({ luku, text }) => {
        return (
            <p>{text} {luku}</p>
        )
       } 
       const KonditionaalinenRenderointi = () => {
        if (this.state.hyva + this.state.neutraali + this.state.huono === 0) {
          return (
            <div>
              <p>ei yhtään palautetta annettu</p>
            </div>
          )
        }
        return (
          <div>
            <Statistics luku={this.state.hyva} text="Hyvä"/>
            <Statistics luku={this.state.neutraali} text="Neutraali"/>
            <Statistics luku={this.state.huono} text="Huono"/>
           
           
            <Statistic luku={((this.state.hyva * 1) + (this.state.neutraali * 0) + (this.state.huono * -1))/(this.state.hyva + this.state.neutraali + this.state.huono)} text="Keskiarvo"/>
            <Statistic luku={(this.state.hyva / (this.state.neutraali + this.state.huono + this.state.hyva))*100} text="Positiivisia"/>
          </div>
        )
      }
  
      return (
        <div>
          <div>
          <h1>Anna palautetta</h1>
            <Button handleClick={this.klikHyva} text="Hyvä"/>
            <Button handleClick={this.klikNeutraali} text="Neutraali"/>
            <Button handleClick={this.klikHuono} text="Huono"/>
           
            <h1>Statistiikka</h1>
           
            
        
            <KonditionaalinenRenderointi />
 
          </div>
        </div>
      )

    }
  
    
  }


  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)