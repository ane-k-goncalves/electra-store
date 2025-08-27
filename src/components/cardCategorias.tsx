import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Card } from "@rneui/base";
import CategoriaSmartphone from "./CategoriaSmartphone";
import { useRouter } from "expo-router";

type Props = {
  onSelectCategoria: (categoria: string) => void;
};

export default function CardCategorias({ onSelectCategoria} : Props) {
  const [categorias, setCategorias] = useState<string[]>([
    "Smartphones",
    "Laptops",
    "Desktops",
    "GPUs",
    "Displays",
    "Smartwatches",
  ]);

  const router = useRouter();

  return (
    <View className="flex flex-wrap flex-row justify-between">
      {categorias.map((categoria, index) => (
        <Pressable key={index} onPress={() => onSelectCategoria(categoria)}>
          <Card containerStyle={styles.containerStyle}>
            <Avatar
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/men/41.jpg" }}
              size="medium"
            />
            <Card.Title style={styles.text}>{categoria}</Card.Title>
          </Card>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    marginBottom: 2,
  },
  containerStyle: {
    borderRadius: 10,
    width: 100,
    height: 80,
    marginBottom: 8,
    margin: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
