import {React, useState, useEffect} from 'react';
import JsonData from './products.json';
// import Search from './Search.jsx'


const Medications = () => {
  const [q, setQ] = useState("")
  const [meds, setMeds] = useState([])

//  || med.strength.includes(query)
  useEffect(() => {
    setMeds(JsonData)
  }, [])

  //currently set to SF for facility

  const filterFunction = (query) => {
    console.log('running', typeof query)
    const filtered = JsonData.filter((med) => {
      return (
        ((med.name.toString().toLowerCase().indexOf(query.toString().toLowerCase())) >= 0) ||
        ((med.strength.indexOf(query)) >= 0)
      )

    }).filter((med) => (med.facility === "SF"))
    if (q) {console.log(q)
      setMeds(filtered)}
    else {setMeds(JsonData)}
    console.log('still running', typeof query)
  }

  const handleSearchChange = (event) => {
    event.preventDefault()
    setQ(event.target.value);
    filterFunction(q)
  }
  return (

  <>
  <h2>MEDS</h2>
  <input
  type="text"
  value={q}
  placeholder="Search"
  onChange={(event) => handleSearchChange(event)}/>
  <select>
  {meds.map((med) => {
    return (
        <option>
          {med.name}: {med.facility}-- {med.strength}
        </option>
    )
  })}
   </select>
  </>
  )
}
  export default Medications;
