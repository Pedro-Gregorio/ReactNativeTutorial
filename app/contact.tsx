import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View className="container">
      <Text className="title">Contact Page</Text>

      <Link className="link" href="/">
        Back Home
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
