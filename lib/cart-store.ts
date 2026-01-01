import type { Product } from "./products"

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

const CART_KEY = "zoghdan-cart"

export const getCart = (): CartState => {
  if (typeof window === "undefined") {
    return { items: [], total: 0, itemCount: 0 }
  }

  try {
    const saved = localStorage.getItem(CART_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (e) {
    console.error("Error loading cart:", e)
  }

  return { items: [], total: 0, itemCount: 0 }
}

export const saveCart = (cart: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }
}

export const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

export const addToCart = (product: Product): CartState => {
  const cart = getCart()
  const existingItem = cart.items.find((item) => item.id === product.id)

  let newItems: CartItem[]

  if (existingItem) {
    newItems = cart.items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
  } else {
    newItems = [...cart.items, { ...product, quantity: 1 }]
  }

  const newCart: CartState = {
    items: newItems,
    total: calculateTotal(newItems),
    itemCount: calculateItemCount(newItems),
  }

  saveCart(newCart)
  return newCart
}

export const removeFromCart = (productId: string): CartState => {
  const cart = getCart()
  const newItems = cart.items.filter((item) => item.id !== productId)

  const newCart: CartState = {
    items: newItems,
    total: calculateTotal(newItems),
    itemCount: calculateItemCount(newItems),
  }

  saveCart(newCart)
  return newCart
}

export const updateQuantity = (productId: string, quantity: number): CartState => {
  const cart = getCart()

  if (quantity <= 0) {
    return removeFromCart(productId)
  }

  const newItems = cart.items.map((item) => (item.id === productId ? { ...item, quantity } : item))

  const newCart: CartState = {
    items: newItems,
    total: calculateTotal(newItems),
    itemCount: calculateItemCount(newItems),
  }

  saveCart(newCart)
  return newCart
}

export const clearCart = (): CartState => {
  const emptyCart: CartState = { items: [], total: 0, itemCount: 0 }
  saveCart(emptyCart)
  return emptyCart
}
