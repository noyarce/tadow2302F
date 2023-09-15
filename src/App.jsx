import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { QueryClient, QueryClientProvider } from "react-query";
import Home from './Pages/Home'


const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Home></Home>
    </QueryClientProvider>
    </>
  )
}

export default App
