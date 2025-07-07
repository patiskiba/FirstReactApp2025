import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//? When you create a function that's going to contain HTML:
//! CAPITALIZE the first letter of that function name
function App() {

  //! FunctionaL Components can only have ONE PARENT ELEMENT
  //? class => className 
  return (
    <div className="container">
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
