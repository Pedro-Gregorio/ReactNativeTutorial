import { Movies } from "../constants/Movies";
import { Colors } from "../constants/Colors";
import "../global.css";

import { View, useColorScheme, FlatList } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

import Icon from "@react-native-vector-icons/lucide";

const Home = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <ThemedView className="container">
      <View className="w-full flex flex-row justify-between items-center">
        <ThemedText className="title" title>
          Movies
        </ThemedText>
        <View className="border rounded-full p-1">
          <Icon name="settings" size={24} style={{ color: theme.text }} />
        </View>
      </View>
      <FlatList
        className="mt-4 w-full"
        data={Movies}
        renderItem={(movie) => {
          return (
            <View className="w-full border border-gray-300 rounded-lg p-2 flex items-start gap-1 mb-2">
              <ThemedText
                className="text-xl font-bold"
                key={movie.item.movieName}
              >
                {movie.item.movieName}
              </ThemedText>
              <ThemedText>
                Directed by{" "}
                <ThemedText className="font-bold">
                  {movie.item.director}
                </ThemedText>
              </ThemedText>
              <ThemedText className="opacity-80 text-sm">
                Release Date: {movie.item.movieReleaseDate}
              </ThemedText>
            </View>
          );
        }}
      />
    </ThemedView>
  );
};

export default Home;
