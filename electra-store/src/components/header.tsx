import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Icon } from "@rneui/base";
import { Link, useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <SafeAreaView className="">
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} className="m-4">
        <Icon name="menu" type="feather" size={30} color={"#fff"} />
      </TouchableOpacity>

      {isOpen && (
        <>
          <Pressable
            onPress={() => setIsOpen(false)}
            className="absolute m-2 top-0 left-0 w-full h-full bg-black/30 z-40"
          />

         <View className=" top-1/4 left-0 h-1/2 w-64 p-4 z-50 bg-[#222] rounded-r-xl shadow-md">
            <Text className="mb-2 m-2 text-white">
              <Icon
                name="person"
                type="MaterialIcons"
                color={"#fff"}
                size={20}
              /> <Link href="/pages/perfil">Perfil</Link>
            </Text>
            <Text className="mb-2 m-2 text-white">
              <Icon name="shopping-cart" type="materialicons" color={"#fff"}  size={20} />
              <Link href="/pages/carrinho"> Carrinho</Link>
            </Text>
            <Text className="mb-2 m-2 text-white">
              <Icon name="heart" type="antdesign" color={"#fff"}  size={20} />  <Link href="/pages/favoritos">  Favoritos</Link>
            </Text>
            <Text className="mb-2 m-2 text-white">
              <Icon name={"book"} type="Ioicons" color={"#fff"}  size={20}/>
                <Link href="/pages/home">  Produtos</Link>
            </Text>
          </View>

          <View className="top-1/4 left-0 h-1/2 w-64 p-4 z-50 shadow-md">
            <Pressable onPress={handleLogout} className="">
              <Text className="mb-2 m-2 text-white">
                <Icon name={"logout"} type="materialicons" color={"#fff"}  size={20}/> Sair
              </Text>
            </Pressable>
            <Text className="mb-2 m-2 text-white">Trabalhe Conosco</Text>
            <Text className="mb-2 m-2 text-white">SAC</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
