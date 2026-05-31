import "../css/Trending.css";

import Amla from "../images/Amla.png";
import coll from "../images/coll.png";
import complex from "../images/B-Complex.png";
import MVitamins from "../images/MutliVitamins.png";
import vitaminsD3 from "../images/Vitamens D3.png";
import Ashwa from "../images/AshwaGandha.png"

function Trending() {
  const products = [
    {
      id: 1,
      name: "Amla Organic",
      price: "$59.99",
      image: Amla,
    },
    {
      id: 2,
      name: "Collagen Builder",
      price: "$29.99",
      image: coll,
    },
    {
      id: 3,
      name: "B-Complex",
      price: "$19.99",
      image: complex,
    },
    {
      id: 4,
      name: "Multi Vitamins",
      price: "$24.99",
      image: MVitamins,
    },
    {
      id: 5,
      name: "Vitamins D3",
      price: "$39.99",
      image: vitaminsD3 ,
    },
    {
      id: 6,
      name: "AshwaGandha",
      price: "$39.99",
      image: Ashwa ,
    },
  ];

  return (
    <section className="trending-page">
      <div className="trending-header">
        <h1>Trending Supplements</h1>
        <p>
          Discover the most popular fitness supplements trusted by athletes,
          bodybuilders, and fitness enthusiasts.
        </p>
      </div>

      <div className="trending-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />

            <div className="product-content">
              <h3>{product.name}</h3>
              <span>{product.price}</span>

              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;