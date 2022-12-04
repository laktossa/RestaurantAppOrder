import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
export default OrderScreen = ({ navigation: { navigate } }) => {
  return (
    <View className="justify-center items-center h-full">
      <View className="h-[50%] w-full justify-center items-center">
        <LottieView
          className="w-[70%]"
          source={require("../../assets/success.json")}
          autoPlay
          loop
        />
      </View>
      <View className="h-[30%]">
        <Text className="font-bold text-text text-3xl">
          Thanks for your Order
        </Text>
        <Text className="font-bold text-text text-2xl">Please Wait....</Text>
      </View>
    </View>
  );
};
