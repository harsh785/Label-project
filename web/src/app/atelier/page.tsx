import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getAssetPath } from "../../utils/assets";

export default function Atelier() {
    return (
        <main className={styles.main}>
            {/* 1. Heritage Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <span className={styles.heroSubtitle}>EST. 1985</span>
                    <h1 className={styles.heroTitle}>The Art of Slow Luxury</h1>
                    <p className={styles.heroText}>
                        Where heritage meets avant-garde. A journey through time,
                        thread by thread.
                    </p>
                </div>
            </section>

            {/* 2. The Philosophy */}
            <section className={styles.philosophySection}>
                <div className={styles.philosophyContent}>
                    <h2 className={styles.sectionTitle}>Our Philosophy</h2>
                    <p className={styles.philosophyText}>
                        We believe that true luxury lies in the details that go unseen.
                        It is the silence of the loom, the patience of the needle, and
                        the legacy of the hands that craft each masterpiece.
                    </p>
                    <div className={styles.signature}>Nishita Gupta</div>
                </div>
            </section>

            {/* 3. The Process (Vertical Journey) */}
            <section className={styles.processSection}>
                <h2 className={styles.sectionTitle}>The Process</h2>

                <div className={styles.processGrid}>
                    {/* Step 1 */}
                    <div className={styles.processCard}>
                        <div className={styles.processImageWrapper}>
                            <Image
                                src={getAssetPath("/images/gown.png")}
                                alt="Sketching"
                                fill
                                className={styles.processImage}
                            />
                        </div>
                        <div className={styles.processInfo}>
                            <span className={styles.stepNumber}>01</span>
                            <h3 className={styles.processTitle}>The Vision</h3>
                            <p className={styles.processDesc}>
                                Every silhouette begins as a sketch, born from a fusion of
                                ancient art and modern architecture.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={`${styles.processCard} ${styles.processCardReverse}`}>
                        <div className={styles.processImageWrapper}>
                            <Image
                                src={getAssetPath("/images/saree.png")}
                                alt="Weaving"
                                fill
                                className={styles.processImage}
                            />
                        </div>
                        <div className={styles.processInfo}>
                            <span className={styles.stepNumber}>02</span>
                            <h3 className={styles.processTitle}>The Weave</h3>
                            <p className={styles.processDesc}>
                                Sourced from the finest silk clusters in Varanasi and Kanchipuram,
                                our fabrics are hand-woven to perfection.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={styles.processCard}>
                        <div className={styles.processImageWrapper}>
                            <Image
                                src={getAssetPath("/images/lehenga.png")}
                                alt="Embroidery"
                                fill
                                className={styles.processImage}
                            />
                        </div>
                        <div className={styles.processInfo}>
                            <span className={styles.stepNumber}>03</span>
                            <h3 className={styles.processTitle}>The Embellishment</h3>
                            <p className={styles.processDesc}>
                                Master artisans spend hundreds of hours hand-embroidering
                                zardozi, sequins, and crystals onto the fabric.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Craft Spotlight */}
            <section className={styles.craftSection}>
                <div className={styles.craftHeader}>
                    <h2 className={styles.sectionTitle}>Master Crafts</h2>
                    <p className={styles.sectionSubtitle}>TECHNIQUES PRESERVED THROUGH GENERATIONS</p>
                </div>

                <div className={styles.craftGrid}>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Zardozi</h3>
                        <p className={styles.craftDesc}>Gold metal embroidery fit for royalty.</p>
                    </div>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Aari Tari</h3>
                        <p className={styles.craftDesc}>Intricate chain stitch work from Kashmir.</p>
                    </div>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Gotapatti</h3>
                        <p className={styles.craftDesc}>Applique work originating from Rajasthan.</p>
                    </div>
                </div>
            </section>

            {/* 5. Appointment CTA */}
            <section className={styles.appointmentSection}>
                <h2 className={styles.appointmentTitle}>Experience the Atelier</h2>
                <p className={styles.appointmentText}>
                    Schedule a private viewing at our flagship store in New Delhi for a
                    bespoke bridal consultation.
                </p>
                <button className={styles.bookButton}>Request Appointment</button>
            </section>
        </main>
    );
}
