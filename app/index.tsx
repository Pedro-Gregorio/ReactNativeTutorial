import { View, Text, Image, useColorScheme } from "react-native";
import { Link } from "expo-router";

import { Colors } from "../constants/Colors";
import "../global.css";

const Home = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <View className="container" style={{ backgroundColor: theme.background }}>
      <Image
        className="my-4"
        source={require("../assets/img/logo_light.png")}
      />

      <Text className="title">Hello World</Text>
      <Text className="mt-2 mb-6">Welcome to Shelfie.</Text>

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
