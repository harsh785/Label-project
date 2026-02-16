import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brandColumn}>
                        <h3 className={styles.brand}>LABEL NISHITA GUPTA</h3>
                        <p className={styles.tagline}>Defining Elite Fashion.</p>
                    </div>

                    {/* Links */}
                    <div className={styles.linksColumn}>
                        <h4>Customer Care</h4>
                        <ul>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/shipping">Shipping & Returns</Link></li>
                            <li><Link href="/size-guide">Size Guide</Link></li>
                        </ul>
                    </div>

                    {/* Social / Newsletter */}
                    <div className={styles.newsletterColumn}>
                        <h4>Stay Connected</h4>
                        <p>Subscribe for exclusive updates.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Your Email" className={styles.input} />
                            <button type="submit" className={styles.button}>Subscribe</button>
                        </form>
                        <div className={styles.socials}>
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Label Nishita Gupta. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
