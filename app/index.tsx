import {
  View,
  Text,
  Image,
  useColorScheme,
  FlatList,
  Button,
} from "react-native";

import { Colors } from "../constants/Colors";
import "../global.css";
import Icon from "@react-native-vector-icons/lucide";

const movies = [
  {
    movieName: "Inception",
    movieReleaseDate: "2010-07-16",
    movieCategory: "Sci-Fi Thriller",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    director: "Christopher Nolan",
  },
  {
    movieName: "The Matrix",
    movieReleaseDate: "1999-03-31",
    movieCategory: "Sci-Fi Action",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    movieName: "Forrest Gump",
    movieReleaseDate: "1994-07-06",
    movieCategory: "Drama",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    director: "Robert Zemeckis",
  },
  {
    movieName: "Pulp Fiction",
    movieReleaseDate: "1994-10-14",
    movieCategory: "Crime Drama",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    director: "Quentin Tarantino",
  },
  {
    movieName: "The Shawshank Redemption",
    movieReleaseDate: "1994-09-23",
    movieCategory: "Drama",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    director: "Frank Darabont",
  },
  {
    movieName: "Interstellar",
    movieReleaseDate: "2014-11-07",
    movieCategory: "Sci-Fi Adventure",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    director: "Christopher Nolan",
  },
  {
    movieName: "Spirited Away",
    movieReleaseDate: "2001-07-20",
    movieCategory: "Animated Fantasy",
    actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    director: "Hayao Miyazaki",
  },
  {
    movieName: "Parasite",
    movieReleaseDate: "2019-05-30",
    movieCategory: "Dark Comedy Thriller",
    actors: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"],
    director: "Bong Joon-ho",
  },
  {
    movieName: "Toy Story",
    movieReleaseDate: "1995-11-22",
    movieCategory: "Animated Comedy",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    director: "John Lasseter",
  },
  {
    movieName: "Eternal Sunshine of the Spotless Mind",
    movieReleaseDate: "2004-03-19",
    movieCategory: "Sci-Fi Romance",
    actors: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    director: "Michel Gondry",
  },
];

const Home = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return (
    <View className="container" style={{ backgroundColor: theme.background }}>
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="title" style={{ color: theme.text }}>
          Movies
        </Text>
        <View className="border rounded-full p-1">
          <Icon name="settings" size={24} style={{ color: theme.text }} />
        </View>
      </View>
      <FlatList
        className="mt-4 w-full"
        data={movies}
        renderItem={(movie) => {
          return (
            <View className="w-full border border-gray-300 rounded-lg p-2 flex items-start gap-1 mb-2">
              <Text
                className="text-xl font-bold"
                key={movie.item.movieName}
                style={{ color: theme.text }}
              >
                {movie.item.movieName}
              </Text>
              <Text style={{ color: theme.text }}>
                Directed by{" "}
                <Text className="font-bold">{movie.item.director}</Text>
              </Text>
              <Text
                className="opacity-80 text-sm"
                style={{ color: theme.text }}
              >
                Release Date: {movie.item.movieReleaseDate}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
