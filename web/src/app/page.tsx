import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import styles from "./page.module.css";
import { getAssetPath } from "../utils/assets";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className={styles.main}>
      <Hero />

      {/* Brand Story */}
      <section className={styles.storySection}>
        <h2 className={styles.storyTitle}>Defined by Heritage.<br />Designed for the Modern Muse.</h2>
        <p className={styles.storyText}>
          Label Nishita Gupta bridges the gap between regal Indian craftsmanship and
          contemporary avant-garde silhouettes. Each piece is a narrative of
          luxury, woven with passion and precision.
        </p>
      </section>

      {/* The Atelier */}
      <section className={styles.atelierSection}>
        <div className={styles.atelierContent}>
          <span className={styles.subheading}>THE ATELIER</span>
          <h2 className={styles.sectionTitle}>Handcrafted Perfection</h2>
          <p className={styles.atelierText}>
            From the looms of Varanasi to the embroidery workshops of Lucknow,
            discover the artistry behind our couture.
          </p>
          <Link href="/atelier" className={styles.buttonOutline}>Explore Craftsmanship</Link>
        </div>
        <div className={styles.atelierOverlay}></div>
      </section>

      {/* Featured Collection */}
      <section className={styles.collectionSection}>
        <div className={styles.collectionHeader}>
          <h2 className={styles.collectionTitle}>The Collection</h2>
          <p className={styles.collectionSubtitle}>CURATED LOOKS FOR THE MODERN ELITE</p>
        </div>

        <div className={styles.productGrid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Link href="/collections" className={styles.buttonPrimary}>
            View All Collections
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className={styles.categorySection}>
        <h2 className={styles.categoryHeader}>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          <Link href="/collections" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image
                src={getAssetPath("/images/lehenga.png")}
                alt="Bridal Couture"
                fill
                className={styles.categoryImage}
              />
              <div className={styles.categoryOverlay}>
                <span className={styles.categoryName}>Bridal Couture</span>
              </div>
            </div>
          </Link>
          <Link href="/collections" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image
                src={getAssetPath("/images/saree.png")}
                alt="Handloom Heritage"
                fill
                className={styles.categoryImage}
              />
              <div className={styles.categoryOverlay}>
                <span className={styles.categoryName}>Handloom Series</span>
              </div>
            </div>
          </Link>
          <Link href="/collections" className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <Image
                src={getAssetPath("/images/gown.png")}
                alt="Evening Wear"
                fill
                className={styles.categoryImage}
              />
              <div className={styles.categoryOverlay}>
                <span className={styles.categoryName}>Evening Wear</span>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
