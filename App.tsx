import React, { useState } from "react";
import "./global.css";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const [messageVisible, setMessageVisible] = useState(false);

  const onPress = () => {
    setMessageVisible(true);
  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Pressable onPress={onPress} className="bg-white px-8 py-4 rounded-md">
        <Text className="text-black text-lg font-bold">Press Me</Text>
      </Pressable>

      {messageVisible && (
        <View className="absolute items-center bg-white px-24 py-20 rounded-md">
          <Pressable
            onPress={() => setMessageVisible(false)}
            className="absolute right-2"
          >
            <Text className="text-black text-3xl font-bold">×</Text>
          </Pressable>

          <Text className="text-black text-2xl font-extrabold">Hello Mate</Text>
        </View>
      )}
    </View>
  );
}
