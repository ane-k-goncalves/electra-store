import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../src/contexts/AuthContext";
import { useRouter } from "expo-router";
import { Divider } from "@rneui/themed";
import CardProdutos from "../../src/components/CardProdutos";
import CardCategorias from "../../src/components/CardCategorias";
import CategoriaSmartphone from "../../src/components/CategoriaSmartphone";
import CategoriaLaptop from "../../src/components/CategoriaLaptop";
import CategoriaDesktops from "../../src/components/CategoriaDesktops";
import CategoriaGpus from "../../src/components/CategoriaGpus";
import CategoriaDisplays from "../../src/components/CategoriaDisplays";
import CategoriaSmartwatches from "../../src/components/CategoriaSmartwatches";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user]);

  if (!user) return null;

  const handleCategoriaSelecionada = (categoria: string) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-4">
        {/* Se nenhuma categoria estiver selecionada, mostra os cards de categoria */}
        {categoriaSelecionada === null && (
          <View style={{ maxHeight: 150, margin: 4 }}>
            <ScrollView horizontal={true}>
              <CardCategorias onSelectCategoria={handleCategoriaSelecionada} />
            </ScrollView>
          </View>
        )}

        <Divider style={{ marginVertical: 8 }} />

        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={true}>
            {/* Se nenhuma categoria, mostra todos os produtos */}
            {categoriaSelecionada === null && (
              <>
                <Text className="text-xl font-bold mb-4">Produtos</Text>
                <CardProdutos />
              </>
            )}

            {categoriaSelecionada === "Smartphones" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text className="text-blue-700  mb-8">← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">Smartphones</Text>
                <CategoriaSmartphone />
              </>
            )}

            {categoriaSelecionada === "Laptops" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text className="text-blue-700  mb-8">← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">Laptops</Text>
                <CategoriaLaptop />
              </>
            )}

            {categoriaSelecionada === "Desktops" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text className="text-blue-700  mb-8">← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">Desktops</Text>
                <CategoriaDesktops />
              </>
            )}

            {categoriaSelecionada === "GPUs" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text className="text-blue-700  mb-8">← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">GPUs</Text>
                <CategoriaGpus />
              </>
            )}
            {categoriaSelecionada === "Displays" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text className="text-blue-700  mb-8">← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">Displays</Text>
                <CategoriaDisplays />
              </>
            )}
            {categoriaSelecionada === "Smartwatches" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text className="text-blue-700  mb-8">← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">Smartwatches</Text>
                <CategoriaSmartwatches />
              </>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
