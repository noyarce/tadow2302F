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
  const [valueSelected, setValueSelected] = useState({ label: '', value: '' });
const [mote, setMote]=useState("");
 

  const guardarInfo = () => {
    setPokemones((pokemones) => [...pokemones, {nombre: mote, pokemon: valueSelected.label}]);
  };

  const handleSelect = (newValue) => {
    if (newValue === null || typeof newValue === "undefined") {
      setValueSelected({ label: "", value: "" });
    } else {
      setValueSelected({ label: newValue.label, value: newValue.value });
    }
  };

  const handleChange = (event) => {
    setMote(event.target.value);
  };




const handlesubmit=(event)=>{
  const data = new FormData(event.target);
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
                onChange={(event, newValue) => {
                  handleSelect(newValue);
                }}
                options={nuevoListado? nuevoListado.map((item, index) => ({
                  label: item.label,
                  value: item.id,
                })): []}
                getOptionLabel={(item) => item.label}
                value={valueSelected}
                renderInput={(params) => (
                  <TextField
                    margin="dense"
                    {...params}
                    label="Pokemon"
                    variant="outlined"
                    fullWidth
                    name="txt_tipocli"
                  />
                )}
              />
            </Grid>
            <Grid item md={4}>

              <TextField
                value={mote}
                margin="dense"
                label="Mote"
                variant="outlined"
                fullWidth
                name="txt_tipocli"
                onChange={handleChange}
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
            <Typography>
              {element.pokemon} - {element.nombre}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </form> </Container>
  );
};
export default Formulario;