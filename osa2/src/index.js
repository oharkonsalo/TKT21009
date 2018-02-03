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
      (acc, cur) => acc + cur.tehtavia,
      0
    );
    return (
      <div>
      <p>yhteensä {total} tehtävää</p>
      </div>
      
    )
  }

  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
  }






  const Kurssi= (props) => {
   

    
    return (
        

    <div>     
        <Otsikko kurssi = {props.kurssit.nimi}/>
        <Sisalto kurssit={props.kurssit} />
        <Yhteensa kurssi={kurssi} />
        
    </div>
    )
  }


const App = () => {
    




  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
  }


  return (
    <div>
    <Kurssi kurssit={kurssi} />

 
    
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)