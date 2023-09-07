import { Button, Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemones, setPokemones] = useState([]);

  const [buscador, setBuscador] = useState("");
  const [listaAux, setListaAux] = useState([]);
  const [listaSeleccionados, setListaSEleccionados] = useState([]);

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
        //item.name.toString().includes(buscador.toString().trim())
      item.name.startsWith(buscador)
      );
      setListaAux(result);
    } else {
      setListaAux([]);
    }
  }, [buscador]);


function selectPokemon(item){
  console.log(item)
  setListaSEleccionados(listaSeleccionados=>[...listaSeleccionados, item])

}

console.log(listaSeleccionados);
  return (
    <>
    <input name="buscador" onChange={handleInputChange}></input>
      <Grid container spacing ={1}>
        <Grid item md={4} xs={6}>
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

      <Grid item md={4} xs={6}>
      <List>
      {listaAux.map((item, index) => (
      <> 
      <ListItem disablePadding key={index}>
          <ListItemText primary={item.name} />
          <Button variant="outlined"onClick={()=>selectPokemon(item)}>Miiiiirame!</Button>
        </ListItem>
        <Divider></Divider>
      </>
        
      ))}
       
      </List>
      </Grid>

      <Grid item md={4} xs={6}>
      <List>
      {listaSeleccionados.map((item, index) => (
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
