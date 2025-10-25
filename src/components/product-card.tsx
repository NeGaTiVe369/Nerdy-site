import Link from "next/link"
import Image from "next/image"
import styles from "./product-card.module.css"

interface ProductCardProps {
  id: string
  name: string
  type: string
  price: number
  image: string
}

export function ProductCard({ id, name, type, price }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/silver-necklace-side-view.jpg"
            alt={name}
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.type}>{type}</p>
        <p className={styles.price}>{price.toLocaleString("ru-RU")} ₽</p>
      </div>
    </Link>
  )
}
