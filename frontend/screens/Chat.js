import { View, Text } from "react-native";
import React, { useState } from "react";

import { GiftedChat } from "react-native-gifted-chat";

import { ChatService } from "../services/ChatService";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Test",
      createdAt: new Date(),
      user: {
        _id: 1,
        avatar:
          "https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx",
      },
    },
  ]);

  const handleMessage = async (message) => {
    console.log(ChatService(message));
    setMessages((prev) => GiftedChat.append(prev, message));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(message) => handleMessage(message)}
      user={{ _id: 2 }}
      bottomOffset={75}
    />
  );
}
