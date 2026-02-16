import { products } from "../../data/products";
import { getAssetPath } from "../../utils/assets";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

// Generate static params for static export (GitHub Pages)
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    // Ensure we have a gallery array, fallback to main image if not present
    const gallery = product.gallery && product.gallery.length > 0
        ? product.gallery
        : [product.image, product.image];

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Left: Image Gallery */}
                <div className={styles.gallery}>
                    {gallery.map((img, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={img}
                                alt={`${product.name} - View ${index + 1}`}
                                fill
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>

                {/* Right: Product Details */}
                <div className={styles.details}>
                    <div className={styles.stickyContent}>
                        <p className={styles.category}>{product.category}</p>
                        <h1 className={styles.title}>{product.name}</h1>
                        <p className={styles.price}>{product.price}</p>

                        <div className={styles.divider}></div>

                        <p className={styles.description}>{product.description}</p>

                        <div className={styles.selectors}>
                            <p className={styles.label}>Size</p>
                            <div className={styles.sizeGrid}>
                                {["S", "M", "L", "XL"].map(size => (
                                    <button key={size} className={styles.sizeBtn}>{size}</button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.addToBagBtn}>Add to Bag</button>
                            <button className={styles.enquireBtn}>Consult a Stylist</button>
                        </div>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Material</span>
                                <span>{product.material}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <span className={styles.metaLabel}>Care</span>
                                <span>{product.care}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
