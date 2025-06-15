import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useFavorites } from "../../src/contexts/FavoriteContext";

import CardProdutos from "../../src/components/CardProdutos";
import { Card, Icon } from "@rneui/base";

export default function favoritos() {
  const { favorites, removeFav } = useFavorites();
  
 
  if (favorites.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text> Nenhum produto favoritado ainda </Text>
      </View>
    );
  }
  return (
    <ScrollView className="p-4">
      {favorites.map((item) => (
        
            <Card
                      key={item.id}
                      containerStyle={{ borderRadius: 8, width: "48%", margin: 4 }}
                    >
                      <Card.Image
                        style={{ height: 100, resizeMode: "contain" }}
                        source={{ uri: item.image }}
                      />
                      <Card.Title className="text-sm">{item.title}</Card.Title>
                      <Text className="text-xs">R$ {item.price.toFixed(2)}</Text>
                      <View className="fixed m-2 left-8 flex-row gap-8 bottom-0">
                        <TouchableOpacity
                          onPress={() => { removeFav(item)}}
                        >
                          <Icon name="heart" type="antdesign" size={20} color="#000" />
                        </TouchableOpacity>
                        
                        <Icon name="shopping-cart" type="materialicons" />
                      </View></Card>
        ))}
      
    </ScrollView>
  );
}
