import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React from "react";

export default function cadastro() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View className="flex-1 flex-col justify-center items-center bg-[#030622]">
        <Text className="justify-start text-white">Dados pessoais</Text>
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96"
        onChangeText={onChangeText}
        value={text}
        placeholder="Nome"
        placeholderTextColor="#fff"
      />
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96 "
        onChangeText={onChangeNumber}
        value={number}
        placeholder="CPF"
        placeholderTextColor="#fff"
      />

      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96"
        onChangeText={onChangeText}
        value={text}
        placeholder="email"
        placeholderTextColor="#fff"
      />
      <Text className="justify-start text-white">Endereço</Text>

      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96"
        onChangeText={onChangeText}
        value={text}
        placeholder="endereço"
        placeholderTextColor="#fff"
      />
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96 "
        onChangeText={onChangeNumber}
        value={number}
        placeholder="CEP"
        placeholderTextColor="#fff"
      />
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96"
        onChangeText={onChangeText}
        value={text}
        placeholder="Cidade/estado"
        placeholderTextColor="#fff"
      />
      <Text className="justify-start text-white">Criar senha</Text>

      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96 "
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
      />
      <TextInput
        className="border border-[#5A5858] rounded-md m-4 w-96 "
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Confirme a senha"
        placeholderTextColor="#fff"
        secureTextEntry
      />

      <Pressable
        className="bg-black m-2 py-3 w-44 p-4 rounded-md"
        onPress={() => Alert.alert("Entrar pressionado")}
      >
        <Text className="text-white text-left font-bold">Cadastrar</Text>
      </Pressable>
    </View>
  );
}
