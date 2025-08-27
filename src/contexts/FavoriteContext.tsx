import { View, Text } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'


type Product = {
 id: number;
  title: string;
  price: number;
  image: string;
}

type FavoriteContextType = {
    favorites: Product[];
    addFav: (product: Product) => void;
    removeFav: (product: Product) => void;
}
const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoritesProvider =({children}: {children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Product[] >([]);
    const addFav = (product: Product)=> {
     if (!favorites.find(item => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFav = (product: Product) => {
    setFavorites(favorites.filter(item => item.id !== product.id))
  }
  return (
   <FavoriteContext.Provider value={{favorites, addFav, removeFav}}>
    {children}
   </FavoriteContext.Provider>
  )

};

export const useFavorites = () => {
    const context = useContext(FavoriteContext);
   if (!context) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}