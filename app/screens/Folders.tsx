import React from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FoldersStackParamList } from "../navigation/types";
import FolderCard from "../components/FolderCard";

type Props = {
  navigation: NativeStackNavigationProp<FoldersStackParamList, "FoldersMain">;
};

const folders = [
  {
    id: "1",
    title: "Personal",
    description: "Tasks and daily reminders",
  },
  {
    id: "2",
    title: "UX/UI",
    description: "Design ideas",
  },
  {
    id: "3",
    title: "Writing",
    description: "Articles and blog ideas",
  },
  {
    id: "4",
    title: "Yoga",
    description: "Training plans",
  },
];

export default function Folders({ navigation }: Props) {
  return (
    <View className="flex-1 bg-white p-4 flex-row flex-wrap justify-between">
      {folders.map((folder) => (
        <FolderCard
          key={folder.id}
          id={folder.id}
          title={folder.title}
          description={folder.description}
          navigation={navigation}
        />
      ))}
    </View>
  );
}
