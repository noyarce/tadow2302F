import { Alert, Button, Card, CardActions, CardContent, CardMedia, Container } from "@mui/material";
import React, { useState } from "react";
import { useUsuario } from "../Context/UsuarioContext";
import { useQueryPokemonRandom } from "../queries/queryPokemonRandom";
import {useRegistroPokedex} from "../queries/queryRegistroPokedex";
import { useMutation } from "react-query";

export default function RandomPoke() {
    const { data: pokemon, isLoading: cargandoPokes, isSuccess, isError } = useQueryPokemonRandom();
    const { usuario } = useUsuario();


    console.log("usuario", usuario);
    console.log("pokemon", pokemon);



    const { mutate } = useMutation(useRegistroPokedex, {
        onSuccess: (response) => {
            console.log(response);

        },
        onError: (error) => {
            console.log(error)
        },
    });


    // TODO: primero armar una funcion que sea un onsubmit -> generar un objeto. 
    // objeto generado -> mutate.

    // mutate que haga el registro en el backend

    // backend; api, migracion y la funcion en el repo.
    let urlBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

    return (
        <Container>
            {isError && <Alert severity="error">ese pokemon no existe</Alert>}
            <Card>
                {
                    !cargandoPokes &&
                    <CardMedia sx={{ maxWidth: 200 }} component="img" image={pokemon && urlBase + pokemon?.num_pokedex + ".svg"} />
                }
                <CardContent>
                    numero : {pokemon?.num_pokedex} <br />
                    nombre : {pokemon?.nombre} <br />
                    Region: {pokemon?.region?.reg_nombre}<br />
                    Tipo: {pokemon?.tipo_uno?.tip_nombre} {pokemon?.tipo_dos?.tip_nombre}
                </CardContent>
                <CardActions>
                    <Button>Atrapar  </Button>
                </CardActions>
            </Card>
        </Container>
    )
}