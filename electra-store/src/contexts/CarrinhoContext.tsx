import { View, Text } from 'react-native'
import React from 'react'

type Product = {
 id: number;
  title: string;
  price: number;
  image: string;
}

type CarrinhoContextType = {
    carrinho: Product[];
    
}

export default function CarrinhoContext() {
  return (
    <View>
      <Text>CarrinhoContext</Text>
    </View>
  )
}