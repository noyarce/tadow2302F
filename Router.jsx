import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home";
import ErrorPage from "./src/Pages/ErrorPage";
import PokeDetalle from "./src/Pages/Components/PokeDetalle";

const RouterApp = () => {
  return <LogedInRoutes />;
};


const LogedInRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="pokeDetalle/:pokeId" element={<PokeDetalle/>} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
};
export default RouterApp;