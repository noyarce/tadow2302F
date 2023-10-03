import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const CustomTextField = ({
  control,
  name,
  label,
  disabled,
  rules,
  type = "text",
  ...rest
}) => {
  /** nuestro custom textfield recibe ciertos parametros por defecto para ser utilizados 
  con el formulario.
    control: como se mencionaba en el componente formulario, contiene 
    los metodos para registrar los componentes dentro de nuestro formulario y tener 
    todo asociado. https://react-hook-form.com/api/useform/control
    name: le entrega un identificador al controller y al textfield, asi podemos decir que; 
    nuestro customTextfield se llama "nombre" y a su vez, identificarlo para que los 
    valores que se entreguen en el componente
    se puedan asociar a nombre. 

    label: sirve para la etiqueta de identificación del textfield. (la etiqueta con nombre
     que sube y baja al seleccionar un textield)
    rules : https://react-hook-form.com/docs/useform/register

    disabled: indica al sistema si el cuadro se puede utilizar o no, se recomienda
     probar pasar un disabled = {true } en el formulario, para que puedan 
    ver como funciona. 

    obs. es importante destacar que independiente si está deshabilitado,
     si se requiere que el componente entregue datos, este los solicitará igual y 
    levantará error a pesar de estar desactivado. deben controlar el uso de 
    este hook para evitar malos entendidos.


    type = 'text': le indicamos el tipo de dato que debe esperar; 
    segun nos indica la documentacion de mui, este debe de ser del tipo de dato que 
    html5 permite como input. al ponerle = 'text'
     le decimos que debe tomar ese valor por defecto en caso de que no se le
      indique uno desde el componente padre
    https://mui.com/material-ui/api/text-field
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types

    ...rest : este es un comodín* (no encuentro mejor palabra para ello).
    se encarga de empaquetar todos los otros parametros que no vienen declarados 
    dentro del los anteriormente nombrados, estos se incorporan al componente 
    de manera natural sin tener que declarar todas las props que utilizará
     nuestro componente de forma adicional.
    ejemplo:

    darle inputProps al componente. (los que no están declarados pero si utiliza en el formulario)

    
    Por ultimo, el componente textfield lo envolvemos con el componente
     Controller de ReactHookFrom,Este componente facilitará el 
    trabajo con la libreria materialUI.
    https://react-hook-form.com/api/usecontroller/controller
    
     */

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <TextField
          margin="dense"
          id={name}
          label={label}
          variant="outlined"
          onChange={onChange}
          value={disabled ? "" : value}
          fullWidth
          size="small"
          disabled={disabled}
          type={type}
          {...rest}
        />
        
      )}
    />
  );
};

export default CustomTextField;