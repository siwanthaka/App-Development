import { Text, View } from "react-native";
import "./global.css";
 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl text-center font-bold text-black-500 font-quicksand-bold">
        Welcome to My React native app!
      </Text>
    </View>
  );
}