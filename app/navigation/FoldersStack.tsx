import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Folders from "../screens/Folders";
import FolderDetails from "../screens/FolderDetails";
import { FoldersStackParamList } from "../navigation/types";

const Stack = createNativeStackNavigator<FoldersStackParamList>();

export default function FoldersStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FoldersMain" component={Folders} />
      <Stack.Screen name="FolderDetails" component={FolderDetails} />
    </Stack.Navigator>
  );
}
