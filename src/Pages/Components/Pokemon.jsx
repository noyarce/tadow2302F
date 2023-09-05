import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemones, setPokemones] = useState([]);

  const [buscador, setBuscador] = useState("");
  const [listaAux, setListaAux] = useState([]);
  
  function cargarListado() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        setPokemones(response.data.results);
      });
  }

  useEffect(() => {
    cargarListado();
  }, []);


const handleInputChange = (event) => {
    const { name, value } = event.target;
   setBuscador(value);
  };

  useEffect(() => {
    if (buscador.trim() !== "") {
      let result = pokemones.filter((item) =>
        item.name.toString().includes(buscador.toString().trim())
      );
      setListaAux(result);
    } else {
      setListaAux([]);
    }
  }, [buscador]);

  return (
    <>
    <input name="buscador" onChange={handleInputChange}></input>
      <Grid container spacing ={1}>
      <Grid item md={6}>
      <List>
      {pokemones.map((item, index) => (
      <> 
      <ListItem disablePadding key={index}>
          <ListItemText primary={item.name} />
        </ListItem>
        <Divider></Divider>
      </>
        
      ))}
       
       
      </List>
      </Grid>

      <Grid item md={6}>
      <List>
      {listaAux.map((item, index) => (
      <> 
      <ListItem disablePadding key={index}>
          <ListItemText primary={item.name} />
        </ListItem>
        <Divider></Divider>
      </>
        
      ))}
       
       
      </List>
      </Grid>
      </Grid>
      

      
    </>
  );
}
