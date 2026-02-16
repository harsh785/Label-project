import { products } from "../../data/products";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function NewArrivals() {
    // Filter only new arrivals
    const newArrivals = products.filter(p => p.newArrival);

    return (
        <main className={styles.main}>
            {/* Editorial Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h2 className={styles.editionLabel}>The Royal Edit</h2>
                    <h1 className={styles.heroTitle}>New Arrivals<br />SS &#39;26</h1>
                    <p className={styles.heroSubtitle}>
                        A curated selection of avant-garde drapes and regal silhouettes
                        for the modern muse.
                    </p>
                    <div className={styles.scrollIndicator}>SCROLL TO EXPLORE</div>
                </div>
                <div className={styles.heroOverlay}></div>
            </section>

            {/* Editorial Grid */}
            <section className={styles.gridSection}>
                {newArrivals.map((product, index) => (
                    <Link href={`/product/${product.id}`} key={product.id} className={`${styles.card} ${styles[`card${index + 1}`]}`}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.badge}>JUST DROPPED</div>
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.productName}>{product.name}</h3>
                            <p className={styles.productCategory}>{product.category}</p>
                            <p className={styles.productPrice}>{product.price}</p>
                        </div>
                    </Link>
                ))}
            </section>

            <div className={styles.newsletter}>
                <h3>Stay Updated</h3>
                <p>Be the first to know about our next limited drop.</p>
                <button className={styles.notifyBtn}>Notify Me</button>
            </div>
        </main>
    );
}
