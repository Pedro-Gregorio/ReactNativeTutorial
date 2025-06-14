import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors"; 

export default function ThemedText({title = false,  ...props}) {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];

  const textColor = title ? theme.title : theme.text;

  return <Text style={{color: textColor }} {...props} />

}