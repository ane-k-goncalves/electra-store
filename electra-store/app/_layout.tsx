import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "../global.css";

export default function _layout() {
  return (
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
    </Stack>
  );
}
