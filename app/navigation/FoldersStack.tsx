import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Folders from "../screens/Folders";
import FolderDetails from "../screens/FolderDetails";
import { FoldersStackParamList } from "../navigation/types";
import AppHeader from "../components/AppHeader";

const Stack = createNativeStackNavigator<FoldersStackParamList>();

export default function FoldersStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: ({ navigation, route }) => {
          let title = "Folders";
          if (route.name === "FolderDetails") {
            title = (route.params as any)?.title ?? "Folder Details";
          }

          return <AppHeader navigation={navigation} title={title} />;
        },
      })}
    >
      <Stack.Screen name="FoldersMain" component={Folders} />
      <Stack.Screen name="FolderDetails" component={FolderDetails} />
    </Stack.Navigator>
  );
}
