import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type CartItem = {
  name: string
  price: number
  qty: number
  image?: string
}

const STORAGE_KEY = 'whisk-and-bean.cart'

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    // Keep only well-formed entries in case the stored shape ever changes.
    return parsed.filter(
      (item): item is CartItem =>
        item &&
        typeof item.name === 'string' &&
        typeof item.price === 'number' &&
        typeof item.qty === 'number' &&
        item.qty > 0,
    )
  } catch {
    return []
  }
}

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  isOpen: boolean
  addItem: (item: { name: string; price: number; image?: string }) => void
  removeItem: (name: string) => void
  setQty: (name: string, qty: number) => void
  clear: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  // Persist the cart on every change so it survives a page refresh.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore write failures (e.g. storage disabled or full).
    }
  }, [items])

  const addItem = useCallback((item: { name: string; price: number; image?: string }) => {
    setItems((current) => {
      const existing = current.find((i) => i.name === item.name)
      if (existing) {
        return current.map((i) => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i))
      }
      return [...current, { ...item, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((name: string) => {
    setItems((current) => current.filter((i) => i.name !== name))
  }, [])

  const setQty = useCallback((name: string, qty: number) => {
    setItems((current) =>
      qty <= 0
        ? current.filter((i) => i.name !== name)
        : current.map((i) => (i.name === name ? { ...i, qty } : i)),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items])

  const value = useMemo(
    () => ({ items, count, subtotal, isOpen, addItem, removeItem, setQty, clear, openCart, closeCart }),
    [items, count, subtotal, isOpen, addItem, removeItem, setQty, clear, openCart, closeCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
