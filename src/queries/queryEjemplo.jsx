import { useQuery } from "react-query";
import axios from "axios";

export function useBuscarInfoQuery(params) {
  return useQuery(
    ["buscarInfoQuery",params], buscarInfoQuery, {
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const buscarInfoQuery = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
console.log(data);
return data.results;
};
