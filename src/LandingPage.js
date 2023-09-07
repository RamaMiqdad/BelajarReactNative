import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require(".././images/bg.jpg")}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.subtitle}>Explore amazing features with us.</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 32,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
});

export default LandingPage;
