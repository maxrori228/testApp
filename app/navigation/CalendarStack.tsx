import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../screens/Calendar";
import { CalendarStackParamList } from "../navigation/types";

const Stack = createNativeStackNavigator<CalendarStackParamList>();

export default function CalendarStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CalendarMain" component={Calendar} />
    </Stack.Navigator>
  );
}
