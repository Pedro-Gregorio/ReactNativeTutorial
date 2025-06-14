import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"; 

export default function ThemedText({ ...props}) {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  return <Text style={{color: theme.text }} {...props} />

}