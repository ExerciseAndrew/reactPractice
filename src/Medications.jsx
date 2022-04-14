import {React, useState, useEffect} from 'react';
import JsonData from './products.json';
// import Search from './Search.jsx'


const Medications = () => {
  const [q, setQ] = useState("")
  const [meds, setMeds] = useState([])


  useEffect(() => {
    setMeds(JsonData)
  }, [])

  const filterFunction = (query) => {
    console.log('running')
    query.length>0?
    setMeds(
      JsonData.filter((med) => {
        return (
          med.name.toLowerCase().includes(q.toLowerCase())
        )
      }).filter((med) => (med.facility === "SF"))
    ):setMeds(JsonData)
  }

  const handleSearchChange = (event) => {
    event.preventDefault()
    setQ(event.target.value);
    filterFunction(event.target.value)
  }
  return (

  <>
  <h2>MEDS</h2>
  <input
  type="text"
  value={q}
  placeholder="Search"
  onChange={handleSearchChange}/>
  {meds.map((med) => {
    return (
      <ul>
        {med.name}: {med.facility}
      </ul>
    )
  })}
  </>
  )
}
  export default Medications;
