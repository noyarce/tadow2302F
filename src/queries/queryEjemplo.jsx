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

export const buscarInfoQuery = async (params) => { 
  console.log("params original",params);
  console.log("params detalle ",params.queryKey);

  const [queryName, paramsFilter] = params.queryKey;
 
  let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  let url2= "https://pokeapi.co/api/v2/pokemon?limit="+paramsFilter.limit;
  let url3= `https://pokeapi.co/api/v2/pokemon?limit=${paramsFilter.limit}`;
  
  const { data } = await axios.get(url3);

  return data.results;
};