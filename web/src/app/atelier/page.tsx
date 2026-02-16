"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import { getAssetPath } from "../../utils/assets";
import StoryOverlay from "../../components/StoryOverlay";
import AppointmentModal from "../../components/AppointmentModal";

interface StoryData {
    title: string;
    image: string;
    quote: string;
    text: string;
}

export default function Atelier() {
    const [activeStory, setActiveStory] = useState<StoryData | null>(null);
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

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
        },
        chikankari: {
            title: "Shadows of Lucknow",
            image: getAssetPath("/images/chikankari.png"),
            quote: "It is not just embroidery; it is painting with thread.",
            text: "Chikankari is a delicate and artfully done hand embroidery on a variety of textile fabrics like muslin, silk, chiffon, organza, net, etc. White thread is embroidered on cool, pastel shades of light muslin and cotton garments. We support a collective of 150 women artisans in Lucknow who practice this intricate craft, ensuring they receive fair compensation and recognition for their masterwork."
        },
        kantha: {
            title: "Stories in Stitch",
            image: getAssetPath("/images/kantha.png"),
            quote: "Every stitch tells a story, every quilt holds a memory.",
            text: "Kantha comprises the simplest stitch in the language of embroidery – the running stitch. Originating from Bengal, it was used to join layers of old saris to make quilts. Today, we interpret this humble domestic craft into high fashion, using the running stitch to create complex motifs and textures on fine silks, empowering rural women artisans."
        },
        phulkari: {
            title: "Flower Work of Punjab",
            image: getAssetPath("/images/phulkari.png"),
            quote: "We sow seeds of color on the fabric of life.",
            text: "Phulkari, which literally translates to 'flower work', has a history etched in the culture of Punjab. Spun from the charkha, this spectacular style of embroidery is patterned on odinis, shawls, kurtis and chunris. The main characteristic of this embroidery is the use of darn stitch on the wrong side of cloth with colored silken thread."
        },
        kalamkari: {
            title: "The Pen of Legend",
            image: getAssetPath("/images/kalamkari.jpg"),
            quote: "Nature flows through the pen onto the cloth.",
            text: "Kalamkari is an ancient style of hand painting done on cotton or silk fabric with a tamarind pen, using natural dyes. The word Kalamkari is derived from a Persian word where ‘kalam’ means pen and ‘kari’ refers to craftsmanship. Our collection features the Srikalahasti style, where the 'kalam' or pen is used for freehand drawing of the subject and filling in the colors."
        },
        bandhani: {
            title: "Dots of Joy",
            image: getAssetPath("/images/bandhani.jpg"),
            quote: "A thousand dots, a single prayer for prosperity.",
            text: "Bandhani is a type of tie-dye textile decorated by plucking the cloth with the fingernails into many tiny bindings that form a figurative design. The term bandhani is derived from the Sanskrit word 'bandh', to bind, to tie. We work with artisans in Kutch to bring these vibrant, dotted patterns to life on contemporary silhouettes."
        }
    };

    const storyKeys = Object.keys(stories);

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const cardWidth = 450 + 48; // card width + gap (approx)
            const index = Math.round(scrollLeft / cardWidth);
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', handleScroll);
            return () => slider.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const scrollToSlide = (index: number) => {
        if (sliderRef.current) {
            const cardWidth = 450 + 48; // card width + gap
            sliderRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
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

                <div className={styles.storiesSliderContainer} ref={sliderRef}>
                    <div className={styles.storiesSlider}>
                        {storyKeys.map((key) => (
                            <div key={key} className={styles.storyCard}>
                                <div className={styles.storyImageWrapper}>
                                    <Image
                                        src={stories[key].image}
                                        alt={stories[key].title}
                                        fill
                                        className={styles.storyImage}
                                    />
                                </div>
                                <div className={styles.storyContent}>
                                    <h3 className={styles.storyTitle}>{stories[key].title}</h3>
                                    <p className={styles.storyText}>{stories[key].text.substring(0, 120)}...</p>
                                    <button className={styles.readMoreBtn} onClick={() => setActiveStory(stories[key])}>Read Their Story</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.sliderDots}>
                    {storyKeys.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
                            onClick={() => scrollToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
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
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Chikankari</h3>
                        <p className={styles.craftDesc}>Delicate hand embroidery from Lucknow.</p>
                    </div>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Kantha</h3>
                        <p className={styles.craftDesc}>Running stitch embroidery from Bengal.</p>
                    </div>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Phulkari</h3>
                        <p className={styles.craftDesc}>Floral embroidery geometric patterns from Punjab.</p>
                    </div>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Kalamkari</h3>
                        <p className={styles.craftDesc}>Hand-painted or block-printed cotton textile.</p>
                    </div>
                    <div className={styles.craftCard}>
                        <h3 className={styles.craftName}>Bandhani</h3>
                        <p className={styles.craftDesc}>Traditional tie-dye method from Gujarat.</p>
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
                <button className={styles.bookButton} onClick={() => setIsAppointmentOpen(true)}>Request Appointment</button>
            </section>

            <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setIsAppointmentOpen(false)} />
        </main>
    );
}
