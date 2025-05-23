import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { Avatar } from '@rneui/base'
type Props = {
  categoria: ReactNode;
};
export default function cardCategorias({categoria}: Props) {

  return (
      <View className='m-4 items-center'>
          <Avatar
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
            size="large"
          />
          <Text >{categoria}</Text>
    </View>
  )
}