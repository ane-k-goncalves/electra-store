import { View, Text, Pressable, Modal, Alert, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CheckBox } from "@rneui/base";

export default function carrinho() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 items-center justify-center bg-black/40">
          <View className=" bg-black/80 rounded-2xl p-6 items-center shadow-lg w-[350px] h-[550px]">
            <TextInput
              className="border border-[#5A5858] rounded-md m-4 w-[284px]"
              onChangeText={setName}
              value={name}
              placeholder="Nome"
              placeholderTextColor="#fff"
              //em breve será passado por props esses dados
            />
            <TextInput
              className="border border-[#5A5858] rounded-md m-4 w-[284px]"
              onChangeText={setCpf}
              value={cpf}
              placeholder="Nome"
              placeholderTextColor="#fff"
              //em breve será passado por props esses dados
            />
            <TextInput
              className="border border-[#5A5858] rounded-md m-4 w-[284px]"
              onChangeText={setEndereco}
              value={endereco}
              placeholder="Nome"
              placeholderTextColor="#fff"
              //em breve será passado por props esses dados
            />
            <View className="flex-1 justify-start items-start flex-col">
            <Text className="text-white"> FORMA DE PAGAMENTO</Text>

            <CheckBox
              containerStyle={{
                backgroundColor: "black/40",
              }}
              checkedColor="#fff"
              uncheckedColor="#fff"
              center
              title="Cartão de débito"
              textStyle={{ color: "#fff" }}
              checked={check1}
              onPress={() => setCheck1(!check1)}
            />
            <CheckBox
              containerStyle={{
                backgroundColor: "black/40",
              }}
              checkedColor="#fff"
              uncheckedColor="#fff"
              center
              title="Cartão de crédito"
              textStyle={{ color: "#fff" }}
              checked={check2}
              onPress={() => setCheck2(!check2)}
            />
            <CheckBox
              containerStyle={{
                backgroundColor: "black/40",
              }}
              checkedColor="#fff"
              uncheckedColor="#fff"
              center
              title="PIX"
              textStyle={{ color: "#fff" }}
              checked={check3}
              onPress={() => setCheck3(!check3)}
            />

            <CheckBox
              containerStyle={{
                backgroundColor: "black/40",
              }}
              checkedColor="#fff"
              uncheckedColor="#fff"
              center
              title="Aceito os termos de compra"
              textStyle={{ color: "#fff" }}
              checked={check4}
              onPress={() => setCheck4(!check4)}
            />
            </View>

            <View className="absolute flex-1 items-center justify-center flex-row bottom-0">
              <Pressable
                className="rounded-xl items-center justify-center  w-[128px] h-[38px] bg-[#999999] m-4"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text className="text-white text-center">Cancelar</Text>
              </Pressable>
              <Pressable
                className="bg-[#999999] items-center justify-center rounded-xl w-[128px] h-[38px] m-4"
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text className="text-white text-center">Comprar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        className="bg-black rounded-xl px-4 py-2 mt-4 w-[128px] h-[38px]"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white font-bold text-center">
          Finalizar
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
