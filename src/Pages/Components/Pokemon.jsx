import axios from "axios"
import { useEffect , useState} from "react"

export default function Pokemon(){
    const [pokemones, setPokemones]=useState([]);
    function cargarListado(){
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000').then(
            (response)=>{
                setPokemones(response.data.results)

            }
        )
    }
                console.log(pokemones)

    useEffect(()=>{
        cargarListado();
    },[]);


    return(<>

    {pokemones.map((item, index) => 
    (
       <>{item.name}</> 
    )
 )}
    Hola que tal 
    </>)
}