export type Drink = {
  name: string
  price: number // placeholder prices — edit to your real menu pricing
  favorite?: boolean
  note?: string
  image?: string // path in /public; drinks without one show a placeholder
}

export type Category = {
  id: string
  title: string
  emoji: string
  note?: string
  drinks: Drink[]
}

export const MENU: Category[] = [
  {
    id: 'coffee',
    title: 'Coffee',
    emoji: '☕',
    drinks: [
      { name: 'Espresso', price: 3.5, image: '/menu/espresso.png' },
      { name: 'Americano', price: 4.0, image: '/menu/americano.png' },
      { name: 'Iced Americano', price: 4.5, image: '/menu/iced-americano.png' },
      { name: 'Cold Brew', price: 5.0, image: '/menu/cold-brew.png' },
      { name: 'Cortado', price: 4.5, favorite: true, image: '/menu/cortado.png' },
      { name: 'Cappuccino', price: 5.0, favorite: true, image: '/menu/cappuccino.png' },
      { name: 'Flat White', price: 5.0, favorite: true, image: '/menu/flat-white.png' },
      { name: 'Hot Latte', price: 5.25, image: '/menu/hot-latte.png' },
      { name: 'Iced Latte', price: 5.5, favorite: true, image: '/menu/iced-latte.png' },
      { name: 'Iced Vanilla Latte', price: 5.75, favorite: true, image: '/menu/iced-vanilla-latte.png' },
      { name: 'Pour Over', price: 5.5, favorite: true, note: 'Optional: Cardamom', image: '/menu/pour-over.png' },
      { name: 'Coffee Lemonade', price: 6.0, favorite: true, image: '/menu/coffee-lemonade.png' },
      { name: 'Blended Coffee Latte', price: 6.5, image: '/menu/blended-coffee.png' },
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha',
    emoji: '🍵',
    drinks: [
      { name: 'Traditional Matcha', price: 5.0, image: '/menu/traditional-matcha.png' },
      { name: 'Hot Matcha Latte', price: 5.75, image: '/menu/hot-matcha-latte.png' },
      { name: 'Iced Matcha Latte', price: 6.0, favorite: true, image: '/menu/iced-matcha-latte.png' },
      {
        name: 'Strawberry Matcha Latte',
        price: 6.75,
        favorite: true,
        image: '/menu/strawberry-matcha-latte.png',
      },
      { name: 'Guava Matcha Latte', price: 6.75, favorite: true, image: '/menu/guava-matcha-latte.png' },
      {
        name: 'Matcha Cold Foam with Coconut Water',
        price: 6.75,
        favorite: true,
        image: '/menu/matcha-coconut-foam.jpeg',
      },
      { name: 'Matcha Yuzu Lemonade', price: 6.5, favorite: true, image: '/menu/matcha-yuzu-lemonade.png' },
      { name: 'Blended Matcha Latte', price: 7.0, image: '/menu/blended-matcha-latte.png' },
    ],
  },
  {
    id: 'hojicha',
    title: 'Hojicha',
    emoji: '🌱',
    drinks: [
      { name: 'Hojicha', price: 5.0, image: '/menu/hojicha.png' },
      { name: 'Hot Hojicha Latte', price: 5.75, image: '/menu/hot-hojicha-latte.png' },
      { name: 'Iced Hojicha Latte', price: 6.0, favorite: true, image: '/menu/iced-hojicha-latte.png' },
      {
        name: 'Iced Hojicha Latte with Black Sesame Cold Foam',
        price: 6.75,
        favorite: true,
        image: '/menu/hojicha-black-sesame.png',
      },
      { name: 'Blended Hojicha Latte', price: 7.0, image: '/menu/blended-hojicha-latte.png' },
    ],
  },
  {
    id: 'loose-leaf',
    title: 'Loose Leaf Tea',
    emoji: '🍵🌿',
    note: 'Optional: Lemon, Cardamom, or Ginger',
    drinks: [
      { name: 'Genmaicha', price: 4.5, image: '/menu/genmaicha.png' },
      { name: 'Gyokuro', price: 5.5, image: '/menu/gyokuro.png' },
      { name: 'Hojicha', price: 4.5, image: '/menu/loose-hojicha.png' },
    ],
  },
]
