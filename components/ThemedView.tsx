import { View, ViewStyle, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = ({ ...props }) => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return <View style={{ backgroundColor: theme.background }} {...props} />;
};

export default ThemedView;
