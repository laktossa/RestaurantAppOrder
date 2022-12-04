import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { currencyFormat } from "simple-currency-format";
import { addBasket, reduceBasket } from "../store/slicerOrder";

export default CardDetail = function ({ name, price, amount, imageUrl, id }) {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addBasket({ id, price }));
  };
  const handleReduce = () => {
    dispatch(reduceBasket({ id, price }));
  };
  return (
    <View className="item-center border-2 border-secondary mb-2 rounded-[40px]">
      <View className="justify-between p-2 m-2 flex-row h-30">
        <View className="gap-4 flex-row w-[75%]">
          <Image
            className="w-20 h-20"
            source={{
              uri: `${imageUrl}`,
            }}
          />
          <View className="gap-y-1  w-[55%]">
            <Text className="text-text font-bold text-xl">{name}</Text>
            <Text className="text-text font-bold text-base">
              {currencyFormat(price, "id-ID", "IDR")}
            </Text>
          </View>
        </View>
        <View className="justify-center items-end gap-2 w-[30%] ">
          <View>
            <Text className="right-1 font-bold text-text text-lg">
              {currencyFormat(amount * price, "id-ID", "IDR")}
            </Text>
          </View>
          <View>
            <View className="flex-row h-8 bg-primary justify-center items-center w-full rounded-2xl">
              <TouchableOpacity
                className="w-[40%] items-center"
                onPress={() => handleReduce()}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <View className="w-[20%] items-center">
                <Text>{amount}</Text>
              </View>
              <TouchableOpacity
                className="w-[40%] items-center"
                onPress={() => handleAdd()}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
