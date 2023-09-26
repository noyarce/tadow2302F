import { useQuery } from "react-query";
import axios from "axios";

export function useQueryPokeDetalle(params) {
    let habilitado = params.valor != "";
  return useQuery(["queryPokeDetalle", params], queryPokeDetalle, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: habilitado,
  });
}

export const queryPokeDetalle = async (params) => {
  const [queryName, paramsFilter] = params.queryKey;
  let urlBase = "https://pokeapi.co/api/v2/";
  const { data } = await axios.get(urlBase + "pokemon/" + paramsFilter.valor);
return data;
};