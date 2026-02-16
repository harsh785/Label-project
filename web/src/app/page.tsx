import Link from "next/link";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

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
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div style={{ marginTop: "4rem" }}>
          <Link href="/collections" style={{
            display: "inline-block",
            padding: "1rem 2rem",
            border: "1px solid #000",
            fontFamily: "var(--font-secondary)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: "0.9rem",
            transition: "all 0.3s ease"
          }}>
            View All Collections
          </Link>
        </div>
      </section>
    </main>
  );
}
