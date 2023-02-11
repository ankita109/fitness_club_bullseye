import React, { useState } from 'react'
import './App.css'
import './Club.css'


export default function App() {
  const [showData, setShowData] = useState(false)
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ")
  const [Phone, setPhone] = useState(" ")
  const [Address, setAddress] = useState(" ")
  const [objData, setObjData] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: Name,
      email: Email,
      phone: Phone,
      address: Address
    }
    objData.push(data)
    setObjData(objData)
    console.log(objData)
    setShowData(true)

  }
  if (showData) {
    const nameArr = [];
    const emailArr = [];
    const phoneArr = []
    const addressArr = []

    for (let index = 0; index < objData.length; index++) {
      const element = objData[index];
      nameArr.push(element.name)
      emailArr.push(element.email)
      phoneArr.push(element.phone)
      addressArr.push(element.address)

    }
    return (
      <div>
        <h1>Member List</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>{nameArr}</td>
              <td>{emailArr}</td>
              <td>{phoneArr}</td>
              <td>{addressArr}</td>
            </tr>
          </tbody>
        </table>
        <button id="back" onClick={() => { setShowData(false) }}>Back To Home</button>
      </div>
    )

  } else {
    return (
      <div className="App">
        <h1>Fitness Club Registration</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>Name :-</label><br />
            <input type="text" value={Name} onChange={(e) => { setName(e.target.value) }}></input><br /><br />
            <label>Email :-</label><br />
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)}></input><br /><br />
            <label>PhoneNumber :-</label><br />
            <input type="number" value={Phone} onChange={(e) => setPhone(e.target.value)}></input><br /><br />
            <label>Address :-</label><br />
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)}></input><br /><br />
            <button>Add member</button>
          </fieldset>
        </form>
        <button id="view">View member list</button>


      </div>
    )
  }
}

