import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import { ProfileStackParamList } from "../navigation/types";
import AppHeader from "../components/AppHeader";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: ({ navigation }) => {
          let title = "Profile";

          return <AppHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Stack.Screen name="ProfileMain" component={Profile} />
    </Stack.Navigator>
  );
}
