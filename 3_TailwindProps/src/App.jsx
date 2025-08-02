import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  
  let myObj = {
    username: "satyam",
    age: 24
  }


  return (
    <>
      <h1 className="bg-amber-300 text-black p-4 rounded-2xl mb-4">
        Tailwind Test
      </h1>
      <Card username="satyam" priceTag="Kimat" />
      <Card username="shivam" />
    </>
  );
}

export default App
