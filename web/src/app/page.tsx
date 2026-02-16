import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      id: "1",
      name: "The Royal Velvet Lehenga",
      category: "Bridal Couture",
      price: "₹ 2,45,000",
      image: "/images/lehenga.png",
    },
    {
      id: "2",
      name: "Opulent Kanjivaram Silk",
      category: "Handloom Heritage",
      price: "₹ 1,85,000",
      image: "/images/saree.png",
    },
    {
      id: "3",
      name: "Noir Avant-Garde Gown",
      category: "Evening Wear",
      price: "₹ 3,20,000",
      image: "/images/gown.png",
    },
  ];

  return (
    <main>
      <Hero />
      <section style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-primary)", fontSize: "2.5rem", marginBottom: "1rem", letterSpacing: "0.05em" }}>
          THE COLLECTION
        </h2>
        <p style={{ opacity: 0.7, fontFamily: "var(--font-secondary)", letterSpacing: "0.1em", marginBottom: "4rem" }}>
          CURATED LOOKS FOR THE MODERN ELITE
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "4rem",
          maxWidth: "1400px",
          margin: "0 auto"
        }}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
