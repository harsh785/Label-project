"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { getAssetPath } from "../../utils/assets";
import StoryOverlay from "../../components/StoryOverlay";

interface StoryData {
    title: string;
    image: string;
    quote: string;
    text: string;
}

export default function Atelier() {
    const [activeStory, setActiveStory] = useState<StoryData | null>(null);

    const stories: Record<string, StoryData> = {
        weavers: {
            title: "The Last Weavers",
            image: getAssetPath("/images/saree.png"),
            quote: "The loom speaks a language only my fingers understand. It is the rhythm of my ancestors.",
            text: "In the narrow lanes of Varanasi, the rhythmic clack of the handloom is fading, replaced by the roar of power looms. We work directly with 40 master weaver families, providing them with fair wages, raw silk, and a global platform. Each saree takes anywhere from 3 to 12 weeks to weave, a testament to patience in an age of instant gratification."
        },
        zardozi: {
            title: "Reviving the Royal Court",
            image: getAssetPath("/images/lehenga.png"),
            quote: "To work with gold is to weave light itself.",
            text: "Zardozi, the art of gold sewing, was once the exclusive domain of Mughal courts. Over time, plastic threads and mass production diluted its glory. At our atelier, we use only authentic copper and silver wire plated with gold. We have established a training center in Lucknow where veteran Kaarigars teach this dying art to the next generation, ensuring the royal court lives on."
        }
    };

    return (
        <main className={styles.main}>
            <StoryOverlay story={activeStory} onClose={() => setActiveStory(null)} />

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

            {/* 3.5. Preservation Stories (Guardians of the Craft) */}
            <section className={styles.storiesSection}>
                <h2 className={styles.sectionTitle}>Guardians of the Craft</h2>
                <p className={styles.storiesIntro}>
                    We are committed to sustaining the rare lineages of artisans who keep
                    India&#39;s heritage alive. Each garment supports a family, a village, and
                    a legacy fighting against extinction.
                </p>

                <div className={styles.storiesGrid}>
                    <div className={styles.storyCard}>
                        <div className={styles.storyImageWrapper}>
                            <Image
                                src={getAssetPath("/images/saree.png")}
                                alt="Weaver"
                                fill
                                className={styles.storyImage}
                            />
                        </div>
                        <div className={styles.storyContent}>
                            <h3 className={styles.storyTitle}>The Last Weavers</h3>
                            <p className={styles.storyText}>
                                In the narrow lanes of Varanasi, a community of master weavers
                                battles the rise of power looms. We work directly with 40
                                families to ensure fair wages and dignity.
                            </p>
                            <button className={styles.readMoreBtn} onClick={() => setActiveStory(stories.weavers)}>Read Their Story</button>
                        </div>
                    </div>

                    <div className={styles.storyCard}>
                        <div className={styles.storyImageWrapper}>
                            <Image
                                src={getAssetPath("/images/lehenga.png")}
                                alt="Zardozi Artisan"
                                fill
                                className={styles.storyImage}
                            />
                        </div>
                        <div className={styles.storyContent}>
                            <h3 className={styles.storyTitle}>Reviving the Royal Court</h3>
                            <p className={styles.storyText}>
                                Zardozi was once the exclusive domain of kings. Today, we are
                                reviving authentic gold-wire techniques that were lost for
                                decades, training a new generation of kaarigars.
                            </p>
                            <button className={styles.readMoreBtn} onClick={() => setActiveStory(stories.zardozi)}>Read Their Story</button>
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
