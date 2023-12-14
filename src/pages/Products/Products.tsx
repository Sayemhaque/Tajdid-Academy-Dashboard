import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Loading/Error";
import { fetchProducts } from "../../../lib/Http";
import { Product } from "../../Model/types";
import { useGetData } from "../../hooks/useGetData";

const Products = () => {
  const { isPending, isError, error, data } = useGetData(
    "products",
    fetchProducts,
    5 * 60 * 1000
  );

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-5 md:px-8 gap-8 py-5">
        {data?.slice(0, 6).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Pagination currentPage={1} onPageChange={1} totalPages={5} key={"s"} />
    </div>
  );
};

export default Products;
