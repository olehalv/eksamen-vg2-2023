import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eksamen 2023 (App)</Text>
      <Text style={styles.text}>
        Denne appen bruker OpenAI sine API tjenester for å generere tekst og
        bilder basert på brukerens forespørsel
      </Text>
      <Text style={styles.text}>
        Laget for eksamen 2023 av Ole M. Halvorsen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});
