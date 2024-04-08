import { createContext, useContext, useState } from "react";

 const CartContext = createContext();

 function CartContextProvider({children}){
    const [cartItem, setCartItem] = useState({});
    

    return <CartContext.Provider value={{cartItem,setCartItem}}>
        {children}
    </CartContext.Provider>
    
}

export function useCartContext(){
    return useContext(CartContext);

}

export default CartContextProvider;