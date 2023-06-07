import { Keyboard, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { IP } from "../services/IP";

import axios from "axios";

import RobotImage from "../assets/robot.png";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const clearChat = () => {
    setMessages([]);
  };

  const handleMessage = async (message) => {
    setLoading(true);
    Keyboard.dismiss();

    setMessages((prev) => GiftedChat.append(prev, message));
    await axios
      .post(`http://${IP}:5000/createChat`, { prompt: message[0].text })
      .then((response) => {
        setMessages((prev) =>
          GiftedChat.append(prev, {
            _id: Math.round(Math.random() * 100000),
            createdAt: new Date(),
            text: response.data,
            user: {
              _id: 1,
              avatar: RobotImage,
            },
          })
        );
      });

    setLoading(false);
  };

  return (
    <>
      {messages.length > 0 ? (
        <TouchableOpacity style={styles.clearBtn} onPress={() => clearChat()}>
          <Text style={styles.clearBtnText}>Clear chat</Text>
        </TouchableOpacity>
      ) : null}
      <GiftedChat
        messages={messages}
        onSend={(message) => handleMessage(message)}
        user={{ _id: 2 }}
        bottomOffset={75}
        disableComposer={loading}
        placeholder={loading ? "Generating response..." : undefined}
        renderBubble={(props) => (
          <Bubble
            {...props}
            wrapperStyle={{
              right: { backgroundColor: "#65f2d5" },
              left: { backgroundColor: "white" },
            }}
            textStyle={{ right: { color: "black" } }}
          />
        )}
        timeTextStyle={{ right: { color: "black" } }}
        renderSend={(props) => (
          <Send {...props} textStyle={{ color: "#65f2d5" }} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  clearBtn: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "#65f2d5",
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 12.5,
    width: "95%",
    borderWidth: 1,
    borderColor: "white",
    zIndex: 10,
  },
  clearBtnText: {
    textAlign: "center",
  },
});
