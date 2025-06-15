import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Icon } from "@rneui/base";
import { useFavorites } from "../contexts/FavoriteContext";
import { useRouter } from "expo-router";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function CardProdutos() {
  const [products, setProducts] = useState<Product[]>([]);


  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const data = await response.json();
      setProducts(data);

      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  
  
const { addFav } = useFavorites();
const router = useRouter();

  return (
    <View className="flex flex-row justify-between">
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
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
            <View className="fixed left-8 m-2 flex-row gap-8 bottom-0">
              <TouchableOpacity
                onPress={() => {
                  addFav(item); 
               
                }}
              >
                <Icon name="heart" type="antdesign" size={20} color="#000" />
              </TouchableOpacity>
              
              <Icon name="shopping-cart" type="materialicons" />
            </View>
          </Card>
        )}
      />
    </View>
  );
}
