import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Chat from "./screens/Chat";
import Image from "./screens/Image";
import About from "./screens/About";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Chat">
        <Tab.Screen
          name="Image"
          component={Image}
          options={{ title: "Create image" }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{ title: "Chat with AI" }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
