import { View, Text, Image } from "react-native";
import React from "react";

import "../global.css";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="container">
      <Image
        className="my-4"
        source={require("../assets/img/logo_light.png")}
      />

      <Text className="title">Hello World</Text>
      <Text className="mt-2 mb-6">Hello World 2</Text>

      <View className="card">
        <Text>Hello, this is a card.</Text>
      </View>

      <Link href={"/about"} className="link">
        About Page
      </Link>

      <Link href={"/contact"} className="link">
        Contact Page
      </Link>
    </View>
  );
};

export default Home;
