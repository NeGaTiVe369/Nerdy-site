"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "../product-page.module.css"

const productData: Record<string, any> = {
  "1": {
    name: "Nerdy is Sexy",
    type: "Колье",
    price: 25000,
    description:
      "Элегантное колье ручной работы из серебра 925 пробы. Минималистичный дизайн подчеркивает вашу индивидуальность. Идеально подходит для повседневной носки и особых случаев.",
    images: [
      "/elegant-silver-necklace-on-white-background.jpg",
      "/silver-necklace-detail-close-up.jpg",
      "/silver-necklace-on-model.jpg",
      "/silver-necklace-side-view.jpg",
    ],
  },
  "2": {
    name: "Minimal Chain",
    type: "Цепь",
    price: 18000,
    description: "Утонченная цепь из серебра 925 пробы. Классический дизайн для ценителей минимализма.",
    images: ["/minimal-silver-chain-on-white-background.jpg", "/silver-chain-detail.jpg", "/silver-chain-on-model.jpg"],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [currentImage, setCurrentImage] = useState(0)
  const { addItem } = useCart()
  const product = productData[params.id] || productData["1"]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const handleAddToCart = () => {
    addItem({
      id: params.id,
      name: product.name,
      type: product.type,
      price: product.price,
      image: product.images[0],
    })
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/" className={styles.backLink}>
            <ChevronLeft style={{ width: "1rem", height: "1rem" }} />
            More products
          </Link>

          <div className={styles.productGrid}>
            <div className={styles.gallery}>
              <div className={styles.mainImage}>
                <Image
                  src={product.images[currentImage] || "/placeholder.svg"}
                  alt={`${product.name} - изображение ${currentImage + 1}`}
                  fill
                />

                <button
                  onClick={prevImage}
                  className={`${styles.navButton} ${styles.navButtonPrev}`}
                  aria-label="Предыдущее изображение"
                >
                  <ChevronLeft style={{ width: "1.25rem", height: "1.25rem" }} />
                </button>
                <button
                  onClick={nextImage}
                  className={`${styles.navButton} ${styles.navButtonNext}`}
                  aria-label="Следующее изображение"
                >
                  <ChevronRight style={{ width: "1.25rem", height: "1.25rem" }} />
                </button>
              </div>

              <div className={styles.thumbnails}>
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`${styles.thumbnail} ${currentImage === idx ? styles.thumbnailActive : ""}`}
                  >
                    <Image src={img || "/placeholder.svg"} alt={`Миниатюра ${idx + 1}`} fill />
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.productInfo}>
              <div className={styles.productHeader}>
                <h1>{product.name}</h1>
                <p>Артикул: {product.type.toLowerCase()}</p>
              </div>

              <p className={styles.price}>{product.price.toLocaleString("ru-RU")} ₽</p>

              <button onClick={handleAddToCart} className={styles.addToCartButton}>
                Добавить в корзину
              </button>

              <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>Описание</h3>
                <p className={styles.descriptionText}>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
