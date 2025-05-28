import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../../src/contexts/AuthContext';
import { useRouter } from 'expo-router';
import CardCategorias from '../../src/components/cardCategorias';
import { Divider } from '@rneui/themed';
import CardProdutos from '../../src/components/cardProdutos';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function home() {

   const { user } = useAuth();
  const router = useRouter();

  
  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  if (!user) return null;


  return (
  
   <SafeAreaView className="flex-1">
      <ScrollView horizontal className="px-4"  contentContainerStyle={{ paddingBottom: 16 }} showsHorizontalScrollIndicator={false}>
        <CardCategorias categoria="Notebook"/>
         <CardCategorias categoria="Notebook"/>
        <CardCategorias categoria="Notebook"/>
         <CardCategorias categoria="Notebook"/>
          <CardCategorias categoria="Notebook"/>
           <CardCategorias categoria="Notebook"/>
      </ScrollView>
        <Divider />

        <ScrollView>
        <CardProdutos />
     </ScrollView>
    </SafeAreaView>
  
  )
}