import useShop from "./ShopContext";
import ProductCard from "./ProductCard";

const Cart = () => {
  const { products, total } = useShop();

  return (
    <>
      <div className=" container mx-auto">
        <h3>Your cart total is {total}.00$</h3>
        {products.map((product, index) => (
          <ProductCard {...product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Cart;
