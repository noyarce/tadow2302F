
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "../Router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <RouterApp />
      </BrowserRouter>    
    </QueryClientProvider>
    </>
  )
}

export default App
