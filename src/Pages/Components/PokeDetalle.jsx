import React, { useEffect, useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
} from "@mui/material";

import {useQueryPokeDetalle} from "../../queries/queryPokeDetalle";
import { Link, useParams  } from "react-router-dom";

export default function PokeDetalle() {

//const [params, setParams]=useState({valor: ''}) 

const paramsUrl = useParams();

const { data: poke, isError: hayError } = useQueryPokeDetalle({valor:paramsUrl.pokeId});
 
 
  const handleInputChangeLimit = (event) => {
    const { name, value } = event.target;
  //  setParams({ valor : value});
  };
  
  return (
    <>
          <input name="limitMax" onChange={handleInputChangeLimit}></input>

      {hayError && <Alert severity="error">ese pokemon no existe</Alert>}
      <Card>
        <CardMedia sx={{maxWidth: 200}} component="img" image={poke?.sprites.front_default} />

        <CardContent>
          numero : {poke?.id} <br />
          nombre : {poke?.name}
        </CardContent>
        <CardActions>
           <Link to={'/'}><Button>
            Volvé
          </Button>
           </Link>
          
        </CardActions>
      </Card>
    </>
  );
}