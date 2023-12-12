

const base_url = import.meta.env.VITE_base_url

 export const fetchProducts = async () => {
    const response = await fetch(`${base_url}/products`)
    console.log(response)
    return await response.json()
}


