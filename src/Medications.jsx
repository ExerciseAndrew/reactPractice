import {React, useState, useEffect} from 'react';
import JsonData from './products.json';
import Search from './Search.jsx'


const Medications = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(JsonData)
  }, [])

  function filterFunction (query) { (list.filter((item) => {
    console.log(item.facility === "SF" && item.name.includes(query) ? item.name : "nothing")
  })
)}
  const products = list.map((medication) => {
    return (
    <li>
      {medication.name}
    </li>
    )
  })

  return (
    <div>
    <Search filterFunction={filterFunction} list={list}/>

    <div>{products}</div>
    </div>

  )
}
  export default Medications;