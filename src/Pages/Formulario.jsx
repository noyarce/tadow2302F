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
  const [valueSelected, setValueSelected]=useState({label:'', value:''});

  const onSubmit = (data) => {
    guardarInfo(data);
  };

  const guardarInfo = (data) => {
    setPokemones((pokemones) => [...pokemones, data]);
  };

  const handleSelect = (newValue) => {
    if (newValue === null || typeof newValue === "undefined") {
      setValueSelected({ label: "", value: "" });
    } else {
      setValueSelected({ label: newValue.label, value: newValue.value });
    }
  };

  return (
    <Container>
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
                options={nuevoListado.map((item, index) => ({
                  label: item.name,
                  value: item.id,
                }))}
                getOptionLabel={(item) => item.label}
                value={valueSelected}
                renderInput={(params) => (
                  <TextField
                    margin="dense"
                    {...params}
                    label="label"
                    variant="outlined"
                    fullWidth
                    name="txt_tipocli"
                  />
                )}
              />                
              </Grid>
            <Grid item md={4}>

              aca el nombre
            </Grid>
          </Grid>
          <Button
            id="terminar_registro"
            color="primary"
            size="large"
            variant="contained"
          >
            Terminar Registro
          </Button>
        </Grid>
        <Grid item md={12}>
          {pokemones?.map((element, index) => (
            <Typography>
              {element.poke.label} - {element.mote}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Formulario;