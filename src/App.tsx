import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hola from './Components/Hola'
import Home from './Pages/Home'
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
  variable = arraysito.filter((item)=> item !==valor)
  setArraysito(variable)
}



useEffect(()=>{
  console.log("hola que tal?")
},[]);

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setObjetito({...objetito,[name]:value});
    console.log(objetito);
  };


  return (
    <>
    <Home></Home> 
    </>
  )
}

export default App
