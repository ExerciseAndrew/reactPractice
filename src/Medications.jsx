import {React, useState, useEffect} from 'react';
import JsonData from './products.json';
// import Search from './Search.jsx'


const Medications = () => {
  const [q, setQ] = useState("")
  const meds = !q ? JsonData.map((med) => {
    return (
      <ul>
        {med.name}
      </ul>
    )
  }) : JsonData.filter((med) => {
    return (
      med.location === "SF" && med.name.toLower().includes(q.toLower())
    )
  }).map((med) => {
    return (
      <ul>
        {med.name}
      </ul>
    )
  })
  // const filtered = () => {
  //   return (
  //   meds.filter((med) => {
  //     return (
  //       med.facility === "SF" && med.name.toLower().includes(q.toLower())
  //     )
  //   })
  //   )
  // }

  const handleSearchChange = (event) => {
    event.preventDefault()
    setQ(event.target.value);
  }
  return (

  <>
  <h2>MEDS</h2>
  <input
  type="text"
  value={q}
  placeholder="Search"
  onChange={handleSearchChange}/>
  {meds}
  </>
  )
}
  export default Medications;
