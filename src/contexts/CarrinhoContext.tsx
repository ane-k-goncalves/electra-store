import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'

type Product = {
 id: number;
  title: string;
  price: number;
  image: string;
}

type CarrinhoContextType = {
    carrinho: Product[];
    addCarrinho: (product : Product) => void;
    removeCarrinho: (product : Product) => void;
    
}
const CarrinhoContext = createContext<CarrinhoContextType | undefined> (undefined);


export default function CarrinhoProvider({children}: {children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<Product[]>([]);

  const addCarrinho = (product: Product)=> {
    if(!carrinho.find(item => item.id === product.id)) {
      setCarrinho([...carrinho, product]);
    }
  }

  const removeCarrinho = (product : Product) => {
    setCarrinho(carrinho.filter(item => item.id !== product.id))
  }

  return (
   <CarrinhoContext.Provider value ={{carrinho, addCarrinho, removeCarrinho}}>
    {children}
   </CarrinhoContext.Provider>
  )
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if(!context) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider')
  }
  return context;
}