import React from "react";
import { Pressable, View, Text } from "react-native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabParamList, FoldersStackParamList } from "../navigation/types";

type FoldersStackNavProp = NativeStackNavigationProp<
  FoldersStackParamList,
  "FoldersMain"
>;
type TabNavProp = BottomTabNavigationProp<BottomTabParamList, "Folders">;
type FoldersNavigationProp = CompositeNavigationProp<
  FoldersStackNavProp,
  TabNavProp
>;

type Props = {
  navigation: FoldersNavigationProp;
};

export default function Folders({ navigation }: Props) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Folders", {
          screen: "FolderDetails",
          params: { id: "123" },
        })
      }
      className="flex-1 justify-center items-center bg-grey p-5"
    >
      <Text className="text-2xl font-bold mb-6">Open folder</Text>
    </Pressable>
  );
}
