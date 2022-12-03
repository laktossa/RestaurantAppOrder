import { Image, Text, TouchableOpacity, View } from "react-native";

export default CardDetail = function ({ name, price, amount }) {
  return (
    <View className="item-center mb-2 bg-blue-300 rounded-[20px]">
      <View className="justify-between p-2 m-2 flex-row h-30">
        <View className="gap-4 flex-row">
          <Image
            className="w-20 h-20"
            source={{
              uri: "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
            }}
          />
          <View className="gap-y-1">
            <Text>{name}</Text>
            <Text>{price}</Text>
          </View>
        </View>
        <View className="justify-center items-end gap-2 w-[30%]">
          <View>
            <Text className="right-1">{amount * price}</Text>
          </View>
          <View>
            <View className="flex-row h-8 bg-yellow-300 justify-center items-center w-full rounded-2xl">
              <TouchableOpacity className="w-[40%] items-center  ">
                <Text>-</Text>
              </TouchableOpacity>
              <View className="w-[20%] items-center">
                <Text>{amount}</Text>
              </View>
              <TouchableOpacity className="w-[40%] items-center ">
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
