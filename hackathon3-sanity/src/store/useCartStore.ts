import { create } from 'zustand';

type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  
  addToCart: (item) => set((state) => {
    const existingItem = state.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(i => 
          i.id === item.id ? {...i, quantity: i.quantity + 1} : i
        )
      };
    }
    return { cartItems: [...state.cartItems, {...item, quantity: 1}] };
  }),

  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== id)
  })),

  updateQuantity: (id, quantity) => set((state) => ({
    cartItems: state.cartItems.map(item => 
      item.id === id ? {...item, quantity} : item
    )
  }))
}));

export default useCartStore;
