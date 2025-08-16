import React, { useState, createContext, useContext, useReducer, useEffect } from "react";
import Reducer from './reducer';

export const ProductContext = createContext();

export const initialState = {
    invenItems: [],
    outof_stock: 0,
    storeValue: 0,
    numItems: 0,
    rating: 0,
    darkMode: false,
    user: null,
}

export const StateProvider = (props) => {
    
    const [items, dispatch] = useReducer(Reducer, initialState, () => {
        const localData = localStorage.getItem('items');
        if (localData && localData !== undefined && localData !== null) {
            return JSON.parse(localData);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items])
    
    return (
        <ProductContext.Provider value={{items, dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}

const useItems = () => useContext(ProductContext);

export default useItems;