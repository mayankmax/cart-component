import { createContext, useContext, useState } from "react";

 const cartContext = createContext();

export function CartContextProvider({children}){
    const [cartItem, setCartItem] = useState({});
    

    return <cartContext.Provider value={{cartItem,setCartItem}}>
        {children}
    </cartContext.Provider>
    
}

export function useCartContext(){
    return useContext(cartContext);

}

export default CartContextProvider;