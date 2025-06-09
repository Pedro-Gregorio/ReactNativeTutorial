import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const About = () => {
  return (
    <View className="container">
      <Text className="title">About Page</Text>

      <Link className="link" href="/">
        Back Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
