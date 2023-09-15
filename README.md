# comandos iniciales 
npm install 
npm run dev

# 29 Agosto ,  que vimos? 
creamos nuestra primera aplicación con Vite 

identificamos el componente principal de nuestro sistema( archivo App.tsx )
hicimos modificaciones menores para identificar el uso de Hooks ( lo que profundizaremos la prox clase).
creamos un pequeño componente que recibe *props*
las cuales utilizamos para manejar data entre el componente padre y nuestro componente hijo.


# 31 Agosto 
manejo de hooks 
arrays? (Lectura para la casa)
Material UI
MUI Grid


#quitar strict mode 

# 5 agosto

Integracion de Axios en el codigo para solicitar información a api.
guardado de dicha información
uso de funcion .map sobre listado obtenido para mostrar información en pantalla
uso de List y ListItem de MUI para mostrar de forma ordenada la informacion.
implementación de un buscador para filtrar la información de nuestra lista.
# 7 agosto
creacion de grillas con Grid de MUI
implementación de columnas para mostrar en 3 columnas distintas la informacion en base a lo que se requiere.
filtraje de lista principal, uso de lista auxiliar para mostrar data del filtro y 3ra lista con información seleccionada.

inclusion de funciones y botones para cargar data en cada columna en base a criterios expuestos en clase.


# 14 de agosto

hicimos un repaso general del codigo e hicimos una primera implementacion de react query. ( no funcinó, pero ahora con el codigo actualizado si funciona, aqui van las instrucciones)

teniamos en primera instancia que instalar la libreria react-query. pueden usar la version 3 o 4, uds tienen libertad de elección. 
https://tanstack.com/query/v3/docs/react/installation <-- v3
https://tanstack.com/query/latest/docs/react/installation <-- v4, ultima.

ojo, si usan la version 4 de react query cambia la forma de instalar e importar la libreria. 

v3 : import { useQuery } from "react-query";

v4 : import { useQuery } from "@tanstack/react-query";

las funcionalidades no varian mucho entre versiones, utilizaremos metodos que se son compatibles entre ambos sin afectar funcionalidad.

* La funcion que falló en clase y su corrección *

en el archivo queryejemplo, en la linea 6 nos faltaba un array, el cual lleva el identificador de la funcion (un string) y los parametros que esta recibe. en este caso, solo estamos haciendo un get sin parametros definidos aun, por ende no es necesario declarar los params, pero los dejo ahí para tener el ejemplo. 
en la linea 18 retornamos data.results para tener solo el array con resultados.

implementación.

en el componente "Pokemon" comentamos nuestra funcion que cargaba nuestros pokemones en primera instancia y comentamos el useEffect con el cual la llamabamos.

en contra parte cargamos la linea 18, donde declaramos nuestra query recien creada y lo guardamos en un state llamado "pokemon", bajo este incluimos 2 console.log para ver que tenemos una vista general de los estados que tomará nuestra información.

