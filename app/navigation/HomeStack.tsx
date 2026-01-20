import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { HomeStackParamList } from "../navigation/types";
import AppHeader from "../components/AppHeader";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: ({ navigation }) => {
          let title = "Home";

          return <AppHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Stack.Screen name="HomeMain" component={Home} />
    </Stack.Navigator>
  );
}
