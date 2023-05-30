import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import ProductType from './types/ProductType';

type CartState = {
  isOpen: boolean,
  cart: ProductType[],
  toggleCart: () => void
  clearCart: () => void
  addProduct: (item: ProductType) => void
  removeProduct: (item: ProductType) => void
  onCheckout: string,
  setCheckout: (val: string) => void
}

export const userCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      paymentIntent: '',
      onCheckout: 'cart',
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      addProduct: (item) => set((state) => {
        const existingItem = state.cart.find(cartItem => cartItem.id === item.id)
        if(existingItem){
          const updatedCart = state.cart.map((cartItem) => {
            if(cartItem.id === item.id){
              return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem
          })
          return {cart: updatedCart}
        } else {
          return {cart: [...state.cart, {...item, quantity: 1}]}
        }
      }),
      removeProduct: (item) => set((state) => {
        //check if the item exists and remove quantity -1
        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
        if(existingItem && existingItem.quantity > 1){
          const updatedCart = state.cart.map((cartItem) => {
            if(cartItem.id === item.id){
              return {...cartItem, quantity: cartItem.quantity - 1}
            }
            return cartItem
          })
          return {cart: updatedCart}
        } else {
          //remove item from cart
          const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id)
          return {cart: filteredCart}
        }
      }),
      setCheckout: (val) => set((state) => ({onCheckout: val})),
      clearCart: () => set((state) => ({cart: []})),
    }), 
    { name: "cart-store" }
  )
)

type ThemeState = {
  mode: 'lemonade' | 'halloween'
  toggleMode: (theme: 'lemonade' | 'halloween') => void
}
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'lemonade',
      toggleMode: (theme) => set((state) => ({mode: theme})),
    }),
    {name: 'theme-store'}
  )
)