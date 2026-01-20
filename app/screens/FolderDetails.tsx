import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FoldersStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<FoldersStackParamList, "FolderDetails">;

export default function FolderDetails({ route }: Props) {
  const { title, description } = route.params;

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold">{title}</Text>
      <Text className="mt-4 text-gray-600 text-center">{description}</Text>
    </View>
  );
}
