import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../src/contexts/AuthContext";
import { useRouter } from "expo-router";
import { Divider } from "@rneui/themed";
import CardProdutos from "../../src/components/CardProdutos";
import CardCategorias from "../../src/components/CardCategorias";
import CategoriaSmartphone from "../../src/components/CategoriaSmartphone";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);

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

            {/* Se clicou na categoria Smartphones */}
            {categoriaSelecionada === "Smartphones" && (
              <>
                <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                  <Text style={{ color: "blue", marginBottom: 8 }}>← Voltar</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold mb-4">Smartphones</Text>
                <CategoriaSmartphone />
              </>
            )}

            {/* Exemplo futuro: outras categorias */}
            {categoriaSelecionada !== null &&
              categoriaSelecionada !== "Smartphones" && (
                <>
                  <TouchableOpacity onPress={() => setCategoriaSelecionada(null)}>
                    <Text style={{ color: "blue", marginBottom: 8 }}>← Voltar</Text>
                  </TouchableOpacity>
                  <Text className="text-xl font-bold mb-4">
                    Em breve: {categoriaSelecionada}
                  </Text>
                </>
              )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
