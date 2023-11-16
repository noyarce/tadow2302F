import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home";
import ErrorPage from "./src/Pages/ErrorPage";
import PokeDetalle from "./src/Pages/Components/PokeDetalle";
import Login from "./src/Pages/Login";
import { useUsuario } from "./src/Context/UsuarioContext";

const RouterApp = () => {
  const { usuario } = useUsuario();
  return usuario ? <LogedInRoutes /> : <NotLogedRoutes />;
};

const NotLogedRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  );
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