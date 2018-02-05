import React from 'react'


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

  export default Kurssi
