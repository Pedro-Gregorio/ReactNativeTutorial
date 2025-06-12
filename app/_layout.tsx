import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView className="flex-1">
      <Slot />
      {/* <Text className="text-center">Footer</Text> */}
    </SafeAreaView>
    // <>
    //   <StatusBar />
    //   <Stack
    //     screenOptions={{
    //       headerStyle: { backgroundColor: theme.navBackground },
    //       headerTintColor: theme.title,
    //     }}
    //   >
    //     <Stack.Screen name="index" options={{ title: "Home" }} />
    //     <Stack.Screen name="about" options={{ title: "About" }} />
    //     <Stack.Screen
    //       name="contact"
    //       options={{ title: "Contact", headerShown: false }}
    //     />
    //   </Stack>
    // </>
  );
};

export default RootLayout;


/*

Notes:

The Stack component allows us to access native OS navigation system - with those "back" buttons on top 
when navigating through pages. This can also be styled with the screenOptions property.

The <StatusBar /> component is used to avoid messing with OS colors on the top bar, when playing
with color schemes.

*/
