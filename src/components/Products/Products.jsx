import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products")
   const products = await response.json()
   return products
} 

const Products = () => {
    const { isPending, isError, data = [], error } = useQuery({
        queryKey: ['products'],
        queryFn:fetchProducts,
    })

    if(isPending){
        return <p className="text-center text-2xl font-bold">Loading...</p>
    }
    if(isError){
        return <p className="text-center text-xl font-bold text-red-600">{error?.message}</p>
    }
console.log({"error":error?.message})
    return (
        <section className="grid grid-cols-3 justify-items-stretch px-8 gap-5">
          {data?.slice(0,6).map(product => <ProductCard key={product._id} product={product}/>)}
        </section>
    );
};

export default Products;