import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { addBasket, reduceBasket } from "../store/slicerOrder";

export default Card = ({ name, price, imageUrl }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const handleAddBasket = () => {
    dispatch(addBasket({ price, name }));
    setCount(count + 1);
  };
  const handleReduceBasket = () => {
    dispatch(reduceBasket({ price, name }));
    setCount(count - 1);
  };

  return (
    <>
      <View className="mb-3  rounded-lg ">
        <View className="items-center">
          <View className="w-[95%] h-40 m-2">
            <View className="rounded-xl items-center">
              <Image
                className="w-full h-full rounded-lg"
                fadeDuration={500}
                resizeMode="contain"
                source={{
                  uri: `${imageUrl}`,
                }}
              />
            </View>
          </View>
        </View>
        <View className="mb-1 flex-row items-center justify-between bg-red-200 py-1 px-4 rounded-lg ">
          <View>
            <Text className="font-bold text-lg">{name}</Text>
            <Text className="font-bold text-lg">Rp. {price}</Text>
          </View>
          <View className="flex-row items-center h-10 ">
            {count === 0 ? (
              <>
                <TouchableOpacity
                  className="bg-blue-400 px-8 rounded-xl py-2"
                  onPress={() => handleAddBasket()}
                >
                  <Text className="text-white">Add</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  className="bg-red-600 px-3 rounded-full"
                  onPress={() => handleReduceBasket()}
                >
                  <Text className="text-xl text-center">-</Text>
                </TouchableOpacity>
                <Text className="mx-4">{count}</Text>
                <TouchableOpacity
                  className="bg-blue-300 px-2 rounded-full"
                  onPress={() => handleAddBasket()}
                >
                  <Text className="text-xl text-center">+</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </>
  );
};
