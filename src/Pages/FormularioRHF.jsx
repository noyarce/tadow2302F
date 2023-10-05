import React, { useState, Fragment } from "react";
import {
  Button,
  Card,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";


import CustomAutocomplete from "./CustomComponents/CustomAutocomplete";
import CustomTextField from "./CustomComponents/CustomTextfield";
import { useBuscarInfoQuery } from "../queries/queryEjemplo";

const Formulario = () => {
  const { handleSubmit,reset,control} = useForm({
    defaultValues: {
      poke: { id: "", label: "" },
      mote: ""
    },
  });


  const [pokemones, setPokemones] = useState([]);
  const {data: nuevoListado } = useBuscarInfoQuery({ limit: 151 });


  const onSubmit = (data) => {
        guardarInfo(data);
        reset();
  };

  const guardarInfo = (data) => {
    setPokemones((pokemones) => [...pokemones, data]);
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
          <form id="formulario" onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{ p: 1 }}>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item md={4}>
                  <CustomAutocomplete
                    name="poke"
                    label="pokemons"
                    options={nuevoListado}
                    control={control}
                  />
                </Grid>
                <Grid item md={4}>
                
                  <CustomTextField
                  name="mote"
                  label="mote"
                  control={control}
                  type="text"
                     
                  />
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  id="terminar_registro"
                  color="primary"
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ r: 0 }}
                >
                  Terminar Registro
                </Button>
              </CardActions>
            </Card>
          </form>
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