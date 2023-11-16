import { useQuery } from "react-query";
import axios from "axios";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryPokemonRandom() {
  return useQuery(["queryPokemonRandom"], queryPokemonRandom, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryPokemonRandom = async () => {
  const { data } = await clienteAxios.get("poke/random");
return data.pokemon;
};