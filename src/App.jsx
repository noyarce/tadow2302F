
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "../Router";
import { UsuarioProvider } from "./Context/UsuarioContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <UsuarioProvider> 
      <BrowserRouter>
          <RouterApp />
      </BrowserRouter>    
      </UsuarioProvider>
    </QueryClientProvider>
    </>
  )
}

export default App
