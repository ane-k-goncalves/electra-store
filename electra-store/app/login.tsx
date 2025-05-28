import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { handleError } from "vue";
import { useAuth } from "../src/contexts/AuthContext";

export default function login() {
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    if (name && senha) {
      login({ name, senha });
      router.replace("pages/home");
    }
  };

  return (
    <View className="flex-1 flex-col justify-center items-center bg-[#030622]">
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96"
        onChangeText={setName}
        value={name}
        placeholder="Nome"
        placeholderTextColor="#fff"
      />
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96 "
        onChangeText={setSenha}
        value={senha}
        placeholder="Senha"
        placeholderTextColor="#fff"

        secureTextEntry
      />

      <Pressable
        className="bg-black m-2 py-3 w-44 p-4 rounded-md"
        onPress={handleLogin}
      >
        <Text className="text-white text-left font-bold">Entrar</Text>
      </Pressable>

      <Pressable
        className="bg-black m-2 py-3 w-44 p-4 rounded-md"
        onPress={() => router.push("/cadastro")}
      >
        <Text className="text-white text-left font-bold">Cadastrar-se</Text>
      </Pressable>
    </View>
  );
}
