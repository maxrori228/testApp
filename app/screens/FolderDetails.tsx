import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FoldersStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<FoldersStackParamList, "FolderDetails">;

export default function FolderDetails({ route }: Props) {
  const { id } = route.params;

  return (
    <View className="flex-1 justify-center items-center bg-grey p-5">
      <Text className="text-2xl font-bold mb-6">Folder Details</Text>
    </View>
  );
}
