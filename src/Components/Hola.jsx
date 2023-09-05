export default function Hola(props){
let valor = props.numero;
    return(<>
   {valor % 2 == 0 ?
   <h1>hola que tal {props.nombre} {props.apellido}</h1> : <h1>chao con vo' {props.nombre} {props.apellido}</h1>
   }  
    <button onClick={() => props.setNumero(valor + 1)}>
          boton del hola {props.numero}
        </button>
    </>

    );
}