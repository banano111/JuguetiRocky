import React, { createContext, useState } from 'react';

const ShopContext = createContext({
    
});

const ShopProvider = ({ children }) => {
    const [productContext, setProductContext] = useState([])
    const [shoppingProd, setShoppingProds] = useState(0)
    const [totalShopping, setTotalShopping] = useState(0)

    const newProductContext = (data, valueProduct) => {
        setProductContext([...productContext, data])
        setShoppingProds(shoppingProd + 1)
        setTotalShopping(totalShopping + valueProduct)
    }

    const deleteProduct = () => {
        setProductContext([])
        setShoppingProds(0)
        setTotalShopping(0)
    }

    const data = { productContext, newProductContext, deleteProduct, shoppingProd, totalShopping }

    return (
        <ShopContext.Provider value={data}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopProvider }
export default ShopContext;