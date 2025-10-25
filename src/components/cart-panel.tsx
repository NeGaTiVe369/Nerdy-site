"use client"

import { useCart } from "@/app/lib/cart-context"
import Image from "next/image"
import Link from "next/link"
import { X, Plus, Minus } from "lucide-react"
import styles from "./cart-panel.module.css"

export function CartPanel() {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, closeCart } = useCart()

  const handleOrder = () => {
    if (items.length === 0) return

    // Create order message for Telegram
    let message = "Здравствуйте! Хочу оформить заказ:\n\n"

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.type})\n`
      message += `   Количество: ${item.quantity}\n`
      message += `   Цена: ${(item.price * item.quantity).toLocaleString("ru-RU")} ₽\n\n`
    })

    message += `Итого: ${totalPrice.toLocaleString("ru-RU")} ₽`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)

    // Replace with your actual Telegram username
    const telegramUrl = `https://t.me/NeGaTiVe333?text=${encodedMessage}`

    window.open(telegramUrl, "_blank")
  }

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className={styles.overlay} onClick={closeCart} />

      {/* Cart Panel */}
      <div className={styles.panel}>
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            NERD
          </Link>
          <button onClick={closeCart} className={styles.closeButton} aria-label="Закрыть корзину">
            <X style={{ width: "1.5rem", height: "1.5rem" }} />
          </button>
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>Корзина пуста</p>
            </div>
          ) : (
            <>
              <div className={styles.items}>
                {items.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemImage}>
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className={styles.itemDetails}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <p className={styles.itemType}>{item.type}</p>
                      <p className={styles.itemPrice}>{item.price.toLocaleString("ru-RU")} ₽</p>

                      <div className={styles.quantityControl}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className={styles.quantityButton}
                          disabled={item.quantity <= 1}
                          aria-label="Уменьшить количество"
                        >
                          <Minus style={{ width: "0.875rem", height: "0.875rem" }} />
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className={styles.quantityButton}
                          disabled={item.quantity >= 10}
                          aria-label="Увеличить количество"
                        >
                          <Plus style={{ width: "0.875rem", height: "0.875rem" }} />
                        </button>
                      </div>

                      <button onClick={() => removeItem(item.id)} className={styles.removeButton}>
                        Удалить
                      </button>

                      <p className={styles.subtotal}>Итого: {(item.price * item.quantity).toLocaleString("ru-RU")} ₽</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.footer}>
                <div className={styles.total}>
                  <span>Общая сумма:</span>
                  <span className={styles.totalPrice}>{totalPrice.toLocaleString("ru-RU")} ₽</span>
                </div>
                <button onClick={handleOrder} className={styles.orderButton}>
                  Заказать
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
