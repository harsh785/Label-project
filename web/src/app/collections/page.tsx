"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import styles from "./page.module.css";

export default function Collections() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Bridal Couture", "Handloom Heritage", "Evening Wear"];

    const filteredProducts = filter === "All"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Collection</h1>
                <p className={styles.heroSubtitle}>
                    Discover our curated selection of pre&#39;t, bridal, and evening wear.
                </p>
            </header>

            {/* Top Filter Bar */}
            <div className={styles.filterBar}>
                <div className={styles.categories}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className={styles.count}>
                    {filteredProducts.length} Items
                </div>
            </div>

            <div className={styles.grid}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </main>
    );
}
