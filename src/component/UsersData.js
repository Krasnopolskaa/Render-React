import React, { useState, useEffect } from 'react'

export default function UsersData() {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h2>Render users using React</h2>
      <div class="card">
        {Users.map((item, i) => {
          return <div className = "App">
              <ul>
                <li>User_Id:{item.id}</li>
                <li>Full_Name: { item.name }</li>
                <li>User_Name: { item.username }</li>
                <li>User_Email: { item.email }</li>
                <li>User_Address: { item.address.street }</li>
                <li>User_Suite: { item.address.suite }</li>
                <li>User_City: { item.address.city }</li>
                <li>User_Zipcode: { item.address.zipcode }</li>
                <li>User_Geo_Lat: { item.address.geo.lat }</li>
                <li>User_Geo_Lng: { item.address.geo.lng }</li>
                <li>User_Phone: { item.phone }</li>
                <li>User_Website: { item.website }</li>
                <li>User_Company: { item.company.name }</li>
                <li>User_CatchPhrase: { item.company.catchPhrase }</li>
                <li>User_Bs: { item.company.bs }</li>
              </ul> 
          </div>
        })}
      </div>
    </>
  )
}