import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "../screens/Calendar";
import { CalendarStackParamList } from "../navigation/types";
import AppHeader from "../components/AppHeader";

const Stack = createNativeStackNavigator<CalendarStackParamList>();

export default function CalendarStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: ({ navigation }) => {
          let title = "Calendar";

          return <AppHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Stack.Screen name="CalendarMain" component={Calendar} />
    </Stack.Navigator>
  );
}
