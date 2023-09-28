import React, { useEffect, useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";

import {useQueryPokeDetalle} from "../../queries/queryPokeDetalle";
import { useParams  } from "react-router-dom";

export default function PokeDetalle() {

  const [params, setParams]=useState({valor: ''})
//const params = useParams();

  const { data: poke, isError: hayError } = useQueryPokeDetalle(params);
 // const { data: poke, isError: hayError } = useQueryPokeDetalle({ valor: params.pokeId });
  const handleInputChangeLimit = (event) => {
    const { name, value } = event.target;
    setParams({ valor : value});
  };
  
  return (
    <>
          <input name="limitMax" onChange={handleInputChangeLimit}></input>

      {hayError && <Alert severity="error">ese pokemon no existe</Alert>}
      <Card>
        <CardMedia component="img" image={poke?.sprites.front_default} />

        <CardContent>
          numero : {poke?.id} <br />
          nombre : {poke?.name}
        </CardContent>
      </Card>
    </>
  );
}