"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    return (
        <div className={styles.card}>
            <Link href={`/product/${id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>
            <div className={styles.details}>
                <p className={styles.category}>{category}</p>
                <Link href={`/product/${id}`}>
                    <h3 className={styles.name}>{name}</h3>
                </Link>
                <p className={styles.price}>{price}</p>
            </div>
        </div>
    );
}
