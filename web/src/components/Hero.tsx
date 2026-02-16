import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image / Video would go here */}
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h2 className={styles.subtitle}>Spring / Summer 2026</h2>
                <h1 className={styles.title}>ETHEREAL ELEGANCE</h1>
                <div className={styles.actions}>
                    <Link href="/collections" className={styles.primaryBtn}>
                        Explore Collection
                    </Link>
                </div>
            </div>
        </section>
    );
}
