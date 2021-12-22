
import './App.css'
import { useState } from 'react'
// import { Todo, Count } from './Components'
import * as Components from './Components'

let obj = [
  {
  name: 'Ameen',
  email: 'ameen@gmail.com'
},
{
  name: 'hammad',
  email: 'hammad@gmail.com'
},
{
  name: 'hussain',
  email: 'hussain@gmail.com',
  address: 'Karachi Pakistan'
}
]


const App = () => {

  let name = ''

  return (
    <div>
      
      <Components.Count />
      <h1>{name}</h1>
      <input placeholder="Enter your name here" onChange={e => console.log('e', e?.target?.value)}/>
      {/* <h1>{name}</h1> */}
      {/* <h1>Names and Emails</h1>
      {obj?.map((v, i) => {
        return (
          <div key = {i}>
            <span>{(i + 1)}) Name: {v?.name}</span>
            <br />
             
            <span>&nbsp;&nbsp;&nbsp;&nbsp;Email: <b> {v?.email} </b></span>
            <br />
             
            
            {v?.address && <span>&nbsp;&nbsp;&nbsp;&nbsp;Address: <b> {v?.address} </b></span>} */}

    </div>
  );
}


export default App;
