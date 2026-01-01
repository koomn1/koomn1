import useSWR, { mutate } from "swr"
import { getCart, addToCart, removeFromCart, updateQuantity, clearCart, type CartState } from "@/lib/cart-store"
import type { Product } from "@/lib/products"

const CART_KEY = "zoghdan-cart"

export const useCart = () => {
  const { data: cart } = useSWR<CartState>(CART_KEY, getCart, {
    fallbackData: { items: [], total: 0, itemCount: 0 },
  })

  const add = (product: Product) => {
    const newCart = addToCart(product)
    mutate(CART_KEY, newCart, false)
  }

  const remove = (productId: string) => {
    const newCart = removeFromCart(productId)
    mutate(CART_KEY, newCart, false)
  }

  const update = (productId: string, quantity: number) => {
    const newCart = updateQuantity(productId, quantity)
    mutate(CART_KEY, newCart, false)
  }

  const clear = () => {
    const newCart = clearCart()
    mutate(CART_KEY, newCart, false)
  }

  return {
    cart: cart || { items: [], total: 0, itemCount: 0 },
    addToCart: add,
    removeFromCart: remove,
    updateQuantity: update,
    clearCart: clear,
  }
}
