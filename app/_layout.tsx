import { Stack } from "expo-router";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme() || "light";
  const theme = Colors[colorScheme];
  // console.log(colorScheme)

  return (
    // <SafeAreaView className="flex-1">
    //   <Slot />
    //   <Text className="text-center">Footer</Text>
    // </SafeAreaView>
    <>
      <StatusBar />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

/*

Notes:

The Stack component allows us to access native OS navigation system - with those "back" buttons on top 
when navigating through pages. This can also be styled with the screenOptions property.

The <StatusBar /> component is used to avoid messing with OS colors on the top bar, when playing
with color schemes.

*/
