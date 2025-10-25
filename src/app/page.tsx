import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import styles from "./page.module.css"

const products = [
  { id: "1", name: "Nerdy is Sexy", type: "Колье", price: 25000, image: "" },
  { id: "2", name: "Minimal Chain", type: "Цепь", price: 18000, image: "" },
  { id: "3", name: "Classic Ring", type: "Кольцо", price: 15000, image: "" },
  { id: "4", name: "Bold Bracelet", type: "Браслет", price: 22000, image: "" },
  { id: "5", name: "Elegant Earrings", type: "Серьги", price: 12000, image: "" },
  { id: "6", name: "Statement Pendant", type: "Подвеска", price: 28000, image: "" },
  { id: "7", name: "Delicate Band", type: "Кольцо", price: 14000, image: "" },
  { id: "8", name: "Modern Cuff", type: "Браслет", price: 20000, image: "" },
]

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>
              {/* Минималистичная
              <br />
              элегантность */}
            </h2>
            {/* <p className={styles.heroText}>Ювелирные украшения ручной работы для тех, кто ценит простоту и качество</p> */}
          </div>
        </section>

        <section id="catalog" className={styles.catalog}>
          <div className={styles.catalogContainer}>
            <h2 className={styles.catalogTitle}></h2>

            <div className={styles.grid}>
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
