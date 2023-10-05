import React, { useState, Fragment } from "react";
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useBuscarInfoQuery } from "../queries/queryEjemplo";

const Formulario = () => {
  const [pokemones, setPokemones] = useState([]);
  const { data: nuevoListado } = useBuscarInfoQuery({ limit: 151 });

const handlesubmit=(event)=>{
  event.preventDefault();
  const {pokemon, mote } = event.target.elements;

  console.log(pokemon.value, mote.value);

  setPokemones((pokemones) => [...pokemones, {nombre: mote.value, pokemon: pokemon.value}]);

  console.log(pokemones);
}

  return (
    <Container>
      <form id="caja" onSubmit={handlesubmit}>     
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} xs={12} sx={{ mb: 5 }}>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={4}>

              <Autocomplete
                margin="dense"
                id="select_pokemon" 
               options={nuevoListado? nuevoListado.map((item, index) => ({
                  label: item.label,
                  value: item.id,
                })): []}
                getOptionLabel={(item) => item.label}
                renderInput={(params) => (
                  <TextField
                    margin="dense"
                    {...params}
                    label="Pokemon"
                    variant="outlined"
                    fullWidth
                    name="pokemon"
                  />
                )}
              />
            </Grid>
            <Grid item md={4}>

              <TextField
                margin="dense"
                label="Mote"
                variant="outlined"
                fullWidth
                name="mote"
              />
            </Grid>
          </Grid>
          <Button
            id="terminar_registro"
            color="primary"
            size="large"
            variant="contained"
            type="submit"
          >
            Terminar Registro
          </Button>
        </Grid>
        <Grid item md={12}>
          {pokemones?.map((element, index) => (
            <Typography key={index}>
              {element.pokemon} - {element.nombre}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </form> </Container>
  );
};
export default Formulario;