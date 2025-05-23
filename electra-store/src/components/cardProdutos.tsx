import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/base'

export default function cardProdutos() {
  return (
   <View  className="h-240 m-2">
        <Card  containerStyle={{  borderRadius: 8 }}>
             <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
       <View className="flex-row justify-between items-center ">
          <Card.Title>HELLO WORLD</Card.Title>
            
          <Icon name="heart" type="antdesign" />
          <Icon name="shopping-cart" type="materialicons" />
        
          </View>
          
        </Card>
    </View>
  )
}