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



import { useBuscarInfoQuery } from "../queries/queryEjemplo";

const Formulario = () => {


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
            <Card sx={{ p: 1 }}>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item md={4}>
                  aqui un listado de pokemiones
                </Grid>
                <Grid item md={4}>
                
                 aca el nombre
                </Grid>
              </Grid>
              <CardActions>
                <Button
                  id="terminar_registro"
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Terminar Registro
                </Button>
              </CardActions>
            </Card>
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