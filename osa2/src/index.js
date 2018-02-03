import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }

  const Sisalto = (props) => {
    var temp = props.kurssit
    const result = temp.osat.map(osa=>   <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
    return (
      <div>
         
         
          {result}
         
      </div>
    )
  }

  const Osa = (props) => {
    return (
      <div>
         <p>{props.nimi} {props.tehtavia}</p>

      </div>
    )
  }

  const Yhteensa = (props) => {
    var total = props.kurssi.osat.reduce(
      (sum, osa) => sum + osa.tehtavia,
      0
    );
    return (
      <div>
      <p>yhteensä {total} tehtävää</p>
      </div>
      
    )
  }








  const Kurssi= (props) => {
    var temp = props.kurssit
    const result = temp.map(kurssi=>  <div key={kurssi.id}><Otsikko kurssi={kurssi.nimi} />< Sisalto kurssit={kurssi} /><Yhteensa kurssi={kurssi} /></div>)

    
  
    
    return (
        

    <div>     
        {result}
        
    </div>
    )
  }


const App = () => {
    





  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
    <Kurssi kurssit={kurssit} />

 
    
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)