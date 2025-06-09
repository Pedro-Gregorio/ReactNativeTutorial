import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import "../global.css";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/img/logo_light.png")}
      />

      <Text className="text-2xl font-black">Hello World</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Hello World 2</Text>

      <View style={styles.card}>
        <Text>Hello, this is a card.</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "900",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  image: {
    marginVertical: 20,
  },
});
