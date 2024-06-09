import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  function addToCardHandler() {}
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link className="findmore" to={"/search"}>
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          name="ipad"
          photo="https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={2390}
          productId="dfsadlk"
          stock={32}
          handler={addToCardHandler}
        />
        <ProductCard
          name="ipad"
          photo="https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={2390}
          productId="dfsadlk"
          stock={32}
          handler={addToCardHandler}
        />
        <ProductCard
          name="ipad"
          photo="https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          price={2390}
          productId="dfsadlk"
          stock={32}
          handler={addToCardHandler}
        />
      </main>
    </div>
  );
};

export default Home;
