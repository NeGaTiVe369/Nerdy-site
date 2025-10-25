import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import styles from "./about-page.module.css"

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>О нас</h1>

            <div className={styles.sections}>
              <section className={styles.section}>
                <div className={styles.sectionImage}>
                  <Image src="/jewelry-workshop-artisan-crafting.jpg" alt="Мастерская" fill />
                </div>
                <div className={styles.sectionContent}>
                  <h2 className={styles.sectionTitle}>Наша философия</h2>
                  <p className={styles.sectionText}>
                    NERD — это больше, чем просто ювелирный бренд. Мы создаем украшения для тех, кто ценит минимализм,
                    качество и индивидуальность. Каждое изделие создается вручную с особым вниманием к деталям.
                  </p>
                </div>
              </section>

              <section className={`${styles.section} ${styles.sectionReverse}`}>
                <div className={styles.sectionContent}>
                  <h2 className={styles.sectionTitle}>Ручная работа</h2>
                  <p className={styles.sectionText}>
                    Все наши украшения изготавливаются вручную из серебра 925 пробы. Мы используем только качественные
                    материалы и традиционные техники ювелирного мастерства, сочетая их с современным минималистичным
                    дизайном.
                  </p>
                </div>
                <div className={styles.sectionImage}>
                  <Image src="/silver-jewelry-crafting-hands-detail.jpg" alt="Ручная работа" fill />
                </div>
              </section>

              <section className={styles.contactSection}>
                <h2>Свяжитесь с нами</h2>
                <p>
                  Мы всегда рады ответить на ваши вопросы и помочь с выбором украшений. Свяжитесь с нами любым удобным
                  способом.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
