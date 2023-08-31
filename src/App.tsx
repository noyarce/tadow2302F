import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hola from './Hola'

function App() {
  const [count, setCount] = useState(0)
  const [arraysito, setArraysito]=useState([])
  const [objetito, setObjetito]=useState(null)

  
  useEffect(()=>{
    !(count % 2) || setArraysito(arraysito =>[count, ...arraysito]) 
    console.log(arraysito)
},[count])

const quitaItemArray=(valor)=>{
  let variable;
  variable = arraysito.filter((item)=> item ==valor)
  setArraysito(variable)
}



useEffect(()=>{
  console.log("hola que tal?")
},[]);


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Hola nombre="Juanito" apellido = "Lopez" numero = {count} setNumero={setCount}></Hola>
      

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
   </>
  )
}

export default App
