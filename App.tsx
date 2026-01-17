import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

import Home from "./app/screens/Home";
import Folders from "./app/screens/Folders";
import Calendar from "./app/screens/Calendar";
import Profile from "./app/screens/Profile";

// Stack Navigator
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={Home} />
    </Stack.Navigator>
  );
}

function FoldersStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoldersMain" component={Folders} />
    </Stack.Navigator>
  );
}

function CalendarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CalendarMain" component={Calendar} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={Profile} />
    </Stack.Navigator>
  );
}

// Bottom Tab
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
