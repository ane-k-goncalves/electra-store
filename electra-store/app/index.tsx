import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from 'expo-router';

export default function Page() {
  const router = useRouter();
  
  return (
    <Pressable style={styles.container} onPress={ () => router.push("/login")}>
      <View style={styles.main}>
        <Text style={styles.title}>Electra Store</Text>
       
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#030622"
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff"
  }
});
