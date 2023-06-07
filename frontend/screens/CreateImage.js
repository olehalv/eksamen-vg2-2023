import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

import axios from "axios";
import { IP } from "../services/IP";

export default function CreateImage() {
  const [imageUrl, setImageUrl] = useState();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateImage = (message) => {
    Alert.alert("Are you sure?", `Create image with prompt:\n${message}`, [
      { text: "No", style: "cancel" },
      {
        text: "Yes",
        style: "destructive",
        onPress: async () => {
          setInput("");
          setLoading(true);
          await axios
            .post(`http://${IP}:5000/createImage`, { prompt: message })
            .then((response) => {
              setImageUrl(response.data);
            });
          setLoading(false);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        source={imageUrl ? { uri: imageUrl } : undefined}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        returnKeyType="done"
        placeholder="3D, realistic image of a tiger..."
        onChangeText={(text) => setInput(text)}
        value={input}
        editable={!loading}
      />
      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => handleCreateImage(input)}
        disabled={input.length > 0 ? false : true}
      >
        <Text style={styles.submitText}>
          {loading ? "..." : "Create image"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 25,
  },
  image: {
    width: 325,
    height: 325,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    marginTop: 20,
    width: 325,
    backgroundColor: "white",
    height: 40,
    paddingHorizontal: 15,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  submitBtn: {
    backgroundColor: "#65f2d5",
    width: 325,
    height: 40,
    paddingHorizontal: 15,
    justifyContent: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  submitText: {
    textAlign: "center",
  },
});
