import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useBuscarInfoQuery } from "../../queries/queryEjemplo"
import { Link } from "react-router-dom";
import { usePokemonesLocalQuery } from "../../queries/queryPokemonesLocal";
export default function Pokemon() {
  const [pokemones, setPokemones] = useState([]);
  const [listaAux, setListaAux] = useState([]);
  const [listaSeleccionados, setListaSeleccionados] = useState([]);
  const [buscador, setBuscador] = useState("");

  const [params, setParams] = useState({ limit: 151, page: 1 })


  //const {data: pokemon, isLoading: cargandoPokes, isSuccess, isError }  = useBuscarInfoQuery(params); 
  const { data: pokemon, isLoading: cargandoPokes, isSuccess, isError } = usePokemonesLocalQuery(params);


  useEffect(() => {
    isSuccess && setPokemones(pokemon)
  }, [isSuccess]);

  useEffect(() => {
    isError && console.log("error");
  }, [isError])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuscador(value);
  };


  const handleInputChangeLimit = (event) => {
    const { name, value } = event.target;
    setParams({ limit: value });
  };




  
  useEffect(() => {
    if (buscador.trim() !== "") {
      let result = pokemones.filter((item) =>
        item.nombre.startsWith(buscador)
      );
      setListaAux(result);
    } else {
      setListaAux([]);
    }
  }, [buscador]);




  let urlBase= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return (
    <Container>

      <Grid container spacing={1}>
          {cargandoPokes && <LinearProgress />}
          
            {listaAux.length == 0 && pokemon?.map((item, index) => (
              <Grid item xs={3} md={3}>
                <Card key ={index}>
                  <CardMedia sx={{ maxWidth: 200 }} component="img" image={urlBase+item.num_pokedex+".png"} />
                  <CardContent>
                    numero : {item.num_pokedex} <br />
                    nombre : {item.nombre} <br />
                    Region: {item.region.reg_nombre}<br />
                    Tipo: {item.tipo_uno.tip_nombre} {item.tipo_dos?.tip_nombre}
                  </CardContent>
                </Card>
              </Grid>
            ))}

            {listaAux?.map((item, index) => (
              <Grid item xs={3} md={3}>
              <Card key ={index}>
                <CardMedia sx={{ maxWidth: 200 }} component="img" image={urlBase+item.num_pokedex+".png"} />
                <CardContent>
                  numero : {item.num_pokedex} <br />
                  nombre : {item.nombre} <br />
                  Region: {item.region.reg_nombre}<br />
                  Tipo: {item.tipo_uno.tip_nombre} {item.tipo_dos?.tip_nombre}
                </CardContent>
              </Card>
            </Grid>
            ))}
        </Grid>
    </Container>
  );
}
