import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./app/navigation/HomeStack";
import FoldersStack from "./app/navigation/FoldersStack";
import CalendarStack from "./app/navigation/CalendarStack";
import ProfileStack from "./app/navigation/ProfileStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar hidden={true} style="light" />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string = "";

              if (route.name === "Home")
                iconName = focused ? "home" : "home-outline";
              if (route.name === "Folders")
                iconName = focused ? "folder" : "folder-outline";
              if (route.name === "Calendar")
                iconName = focused ? "calendar" : "calendar-outline";
              if (route.name === "Profile")
                iconName = focused ? "person" : "person-outline";

              return (
                <Ionicons name={iconName as any} size={size} color={color} />
              );
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "white", height: 50 },
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Folders" component={FoldersStack} />
          <Tab.Screen name="Calendar" component={CalendarStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
