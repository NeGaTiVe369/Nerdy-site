"use client"

import type React from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useCart } from "@/app/lib/cart-context"
import styles from "./header.module.css"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { totalItems, openCart } = useCart()

  const handleShopClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (pathname !== "/") {
      router.push("/#catalog")
    } else {
      const catalog = document.getElementById("catalog")
      if (catalog) {
        catalog.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openCart()
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <button onClick={handleShopClick} className={styles.link}>
            shop
          </button>
        </nav>

        <Link href="/" className={styles.logo}>
          <h1 className={styles.nerdText} >NERD</h1>
        </Link>

        <nav className={styles.navRight}>
          <Link href="/about" className={styles.link}>
            about
          </Link>
          <button onClick={handleCartClick} className={styles.link}>
            cart {totalItems > 0 && `(${totalItems})`}
          </button>
        </nav>
      </div>
    </header>
  )
}
