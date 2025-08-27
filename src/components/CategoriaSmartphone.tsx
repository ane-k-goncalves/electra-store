import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import produtos from "../../data/produtos.json";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Icon } from "@rneui/base";
import { useFavorites } from "../contexts/FavoriteContext";
import { useCarrinho } from "../contexts/CarrinhoContext";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
 category: string;
}

export default function CategoriaSmartphone() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addFav } = useFavorites();
const { addCarrinho } = useCarrinho();
   
   useEffect(() => {
    const smartphoneProducts = produtos
      .filter((item) => item.category === "Smartphones")
      .map((item) => ({
        ...item,
        id: Number(item.id), 
      }));

    setProducts(smartphoneProducts);
  }, []);
  return (
    <SafeAreaView>
     
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

                 <TouchableOpacity onPress={() => { addCarrinho(item);}}>  <Icon name="shopping-cart" type="materialicons" size={20} color="#000" /></TouchableOpacity>
              </View>
            </Card>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
