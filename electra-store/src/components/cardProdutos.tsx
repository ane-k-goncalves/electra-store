import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/base";

import produtos from "../../data/produtos.json";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function cardProdutos() {
  return (
    <View className="h-240 m-2 p-16 relative">
      {produtos.map((produto) => (
        <Card key={produto.id} containerStyle={{ borderRadius: 8, position:"relative"}}>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri: produto.image,
            }}
          />
          <View className="flex-row justify-between items-start mt-4 px-2  ">
            <View className="flex-col max-w-[70%]">
              <Card.Title>{produto.name}</Card.Title>
              <Text>R$ {produto.price.toFixed(2)}</Text>
            </View>
            <View className="absolute bottom-4 right-4 flex-col space-y-2 items-end">
              <Icon name="heart" type="antdesign" />
              <Icon name="shopping-cart" type="materialicons" />
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}
