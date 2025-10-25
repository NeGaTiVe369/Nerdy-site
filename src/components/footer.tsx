import Link from "next/link"
import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.label}>Feel free to contact us</p>

        <div className={styles.contactInfo}>
          <p>info@xsai.store</p>
          <p>+7 916 911-00-11</p>
        </div>

        <p className={styles.hours}>пн-вс 11:00-22:00</p>

        <div className={styles.social}>
          <Link href="#" className={styles.socialLink} aria-label="Telegram">
            Telegram
          </Link>
          <span className={styles.separator}>•</span>
          <Link href="#" className={styles.socialLink} aria-label="Instagram">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
