import { useAxios } from "../src/hooks/useAxios"


const base_url = import.meta.env.VITE_base_url

 export const fetchProducts = async () => {
    const axios = useAxios()
    const {data} = await axios.get(`${base_url}/products`)
    return data;
}


