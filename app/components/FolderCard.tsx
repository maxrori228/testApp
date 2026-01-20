import React from "react";
import { Pressable, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FoldersStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<
  FoldersStackParamList,
  "FoldersMain"
>;

type Props = {
  id: string;
  title: string;
  description: string;
  navigation: NavigationProp;
};

export default function FolderCard({
  id,
  title,
  description,
  navigation,
}: Props) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("FolderDetails", {
          id,
          title,
          description,
        })
      }
      className="w-[48%] bg-gray-100 rounded-2xl px-2 py-20 mb-4"
    >
      <Text className="text-lg font-semibold">{title}</Text>
    </Pressable>
  );
}
