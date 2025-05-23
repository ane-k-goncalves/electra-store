import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base';

export default function Header() {
     const [isOpen, setIsOpen] = useState(false);
     
  return (
    
    <View className="">
     
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} className="m-4">
        <Icon name="menu" type="feather" size={30} color={'#fff'}/>
      </TouchableOpacity>

     
      {isOpen && (
        <>
      
          <Pressable
            onPress={() => setIsOpen(false)}
            className="absolute top-0 left-0 w-full h-full bg-black/30 z-40"
          />

       
          <View
            className="absolute top-0 left-0 h-full w-64 p-4 z-50 shadow-md"
          >
            <Text className="text-xl font-bold mb-4 text-white">Perfil</Text>
            <Text className="mb-2 text-white">Carrinho</Text>
            <Text className="mb-2 text-white">Favoritos</Text>
            <Text className="mb-2 text-white">Produtos</Text>
          </View>
        </>
      )}

    </View>
  )
}