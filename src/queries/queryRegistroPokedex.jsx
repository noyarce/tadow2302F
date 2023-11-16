import clienteAxios from "../Helpers/clienteAxios";

export const useRegistroPokedex = async (form) => {
    console.log(form);
    const { data } = await clienteAxios.post('registrarPokedex',form);
    return data;
}