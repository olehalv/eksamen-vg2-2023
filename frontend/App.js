import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import Chat from "./screens/Chat";
import CreateImage from "./screens/CreateImage";
import About from "./screens/About";

import RobotImage from "./assets/robot.png";
import GalleryImage from "./assets/gallery.png";
import AboutImage from "./assets/about.png";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{ tabBarActiveTintColor: "#65f2d5" }}
      >
        <Tab.Screen
          name="CreateImage"
          component={CreateImage}
          options={{
            title: "Create image",
            tabBarIcon: ({ size }) => {
              return (
                <Image
                  source={GalleryImage}
                  style={{ width: size, height: size }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            title: "Chat with AI",
            tabBarIcon: ({ size }) => {
              return (
                <Image
                  source={RobotImage}
                  style={{ width: size, height: size }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            title: "About",
            tabBarIcon: ({ size }) => {
              return (
                <Image
                  source={AboutImage}
                  style={{ width: size, height: size }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
