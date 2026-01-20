import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function AppHeader({ navigation, title }: any) {
  return (
    <View className="h-20 bg-white flex-row items-center px-4 border-b border-gray-200">
      <Pressable onPress={navigation.goBack} className="w-10">
        {navigation.canGoBack() && <Ionicons name="chevron-back" size={24} />}
      </Pressable>

      <Text className="flex-1 text-center text-lg font-semibold">{title}</Text>

      <Pressable className="w-10 items-end">
        <Ionicons name="settings-outline" size={22} />
      </Pressable>
    </View>
  );
}
