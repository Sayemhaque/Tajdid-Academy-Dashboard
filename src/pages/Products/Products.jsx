import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const products = await response.json()
    return products
}

const Products = () => {
    const { isPending, isError, data = [], error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    if (isPending) {
        return <p className="text-center text-2xl font-bold">Loading...</p>
    }
    if (isError) {
        return <p className="text-center text-xl font-bold text-red-600">{error?.message}</p>
    }

    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-5 md:px-8 gap-8 py-5">
                {data?.slice(0,6).map(product => <ProductCard key={product.id} product={product} />)}
            </section>
            <Pagination currentPage={1} onPageChange={"s"} totalPages={5} key={'s'} />
        </div>
    );
};

export default Products;