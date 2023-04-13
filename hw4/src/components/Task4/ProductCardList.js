import { useFetch } from "./useFetch";
import { ProductCard } from "./ProductCard";
const PRODUCTS_BASE_URL = "https://fakestoreapi.com/products";

const ProductCardList = () => {
  const { data: products, loading, error } = useFetch(PRODUCTS_BASE_URL);
  return (
    <div className="card_container">
      {loading && <div>loading...</div>}
      {error && !loading && <div>Something went wrong... Error: {error}</div>}
      {!error && !loading && products?.map((product) => (
          <ProductCard
            {...product}
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
    </div>
  );
};

export default ProductCardList;
