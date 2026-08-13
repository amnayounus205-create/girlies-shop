import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  /*
   * =========================================================
   * LOAD CART FROM LOCAL STORAGE SAFELY
   * =========================================================
   */

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('girlies-shop-cart');

      if (!savedCart) {
        return [];
      }

      const parsedCart = JSON.parse(savedCart);

      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error('Unable to load cart:', error);
      return [];
    }
  });


  /*
   * =========================================================
   * SAVE CART TO LOCAL STORAGE
   * =========================================================
   */

  useEffect(() => {
    try {
      localStorage.setItem(
        'girlies-shop-cart',
        JSON.stringify(cart)
      );
    } catch (error) {
      console.error('Unable to save cart:', error);
    }
  }, [cart]);


  /*
   * =========================================================
   * ADD PRODUCT TO CART
   * =========================================================
   */

  const addToCart = (product) => {
    if (!product || product.id === undefined) {
      console.error('Invalid product:', product);
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };


  /*
   * =========================================================
   * REMOVE PRODUCT
   * =========================================================
   */

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };


  /*
   * =========================================================
   * UPDATE QUANTITY
   * =========================================================
   */

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id !== id) {
            return item;
          }

          const newQuantity = item.quantity + amount;

          return {
            ...item,
            quantity: newQuantity,
          };
        })
        .filter((item) => item.quantity > 0)
    );
  };


  /*
   * =========================================================
   * SET EXACT QUANTITY
   * =========================================================
   */

  const setQuantity = (id, quantity) => {
    const safeQuantity = Math.max(
      1,
      Number(quantity) || 1
    );

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: safeQuantity,
            }
          : item
      )
    );
  };


  /*
   * =========================================================
   * CLEAR CART (Fixes persistence issue after checkout)
   * =========================================================
   */

  const clearCart = () => {
    setCart([]);
    try {
      localStorage.removeItem('girlies-shop-cart');
    } catch (error) {
      console.error('Unable to clear cart storage:', error);
    }
  };


  /*
   * =========================================================
   * MEMOIZED CALCULATIONS
   * =========================================================
   */

  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  const productCount = useMemo(() => {
    return cart.length;
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + Number(item.price) * item.quantity,
      0
    );
  }, [cart]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getQuantity = (id) => {
    const item = cart.find(
      (cartItem) => cartItem.id === id
    );

    return item ? item.quantity : 0;
  };


  /*
   * =========================================================
   * CONTEXT VALUE
   * =========================================================
   */

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    setQuantity,
    clearCart,
    cartCount,
    productCount,
    cartSubtotal,
    isInTag: isInCart,
    isInCart,
    getQuantity,
  };


  /*
   * =========================================================
   * PROVIDER
   * =========================================================
   */

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside a CartProvider'
    );
  }

  return context;
}

export default CartContext;