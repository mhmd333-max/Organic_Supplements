
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Nature Has Always Cared For Us</h1>
        <p>Healthy organic food and supplements.</p>
      </section>

      <section className="products">
        <h2>Trending Products</h2>

        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
