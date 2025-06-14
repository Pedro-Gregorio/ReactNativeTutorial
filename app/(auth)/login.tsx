import { StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";

const Login = () => {
  return (
    <ThemedView className="flex-1 justify-center items-center">
      <ThemedText className="title" title>
        Login to Your Account
      </ThemedText>

      <Link className="mt-10 underline" href={"/"}>
        Back Home
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({});
