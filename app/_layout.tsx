import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "../global.css";
import { AuthProvider } from "../src/contexts/AuthContext";
import { Icon } from "@rneui/base";
import { FavoritesProvider } from "../src/contexts/FavoriteContext";
import Header from "../src/components/header";
import CarrinhoProvider from "../src/contexts/CarrinhoContext";


export default function _layout() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <CarrinhoProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="login"
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#030622",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="cadastro"
          options={{
            title: "Cadastro",
            headerStyle: {
              backgroundColor: "#030622",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="pages/home"
          options={{
            title: "",
            headerLeft: () => <Header />,
            headerStyle: {
              backgroundColor: "#030622",
            },
          }}
        />
        <Stack.Screen
          name="pages/perfil"
          options={{
            title: "",
            headerLeft: () => <Header />,
            headerStyle: {
              backgroundColor: "#030622",
            },
          }}
        />
        <Stack.Screen
          name="pages/carrinho"
          options={{
            title: "",
            headerLeft: () => <Header />,
            headerStyle: {
              backgroundColor: "#030622",
            },
          }}
        />
         <Stack.Screen
          name="pages/favoritos"
          options={{
            title: "",
            headerLeft: () => <Header />,
            headerStyle: {
              backgroundColor: "#030622",
            },
          }}
        />
        
      </Stack>
      </CarrinhoProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}
