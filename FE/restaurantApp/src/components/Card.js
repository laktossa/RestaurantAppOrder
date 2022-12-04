import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, reduceBasket } from "../store/slicerOrder";
import { currencyFormat } from "simple-currency-format";

export default Card = ({ name, price, imageUrl, id }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.order);
  const [count, setCount] = useState(0);

  const handleAddBasket = () => {
    dispatch(addBasket({ price, name, imageUrl, id }));
    setCount(count + 1);
  };
  const handleReduceBasket = () => {
    dispatch(reduceBasket({ price, name, id }));
    setCount(count - 1);
  };

  useEffect(() => {
    let find = basket.find((e, i) => e.id === id);
    if (find) setCount(find.amount);
  }, [basket]);

  return (
    <>
      <View className="mb-3 rounded-lg ">
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
        <View className="mb-1 flex-row justify-between items-center bg-secondary py-1 px-4 rounded-lg ">
          <View className=" w-[70%]">
            <Text className="font-bold text-xl text-white">{name}</Text>
            <Text className="font-bold text-lg text-white">
              {currencyFormat(price, "id-ID", "IDR")}
            </Text>
          </View>
          <View className="flex-row-reverse w-[30%]  items-centerh-10">
            {count === 0 ? (
              <>
                <TouchableOpacity
                  className="bg-primary px-8 w-full rounded-2xl py-2"
                  onPress={() => handleAddBasket()}
                >
                  <Text className="text-text font-bold text-center ">Add</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View className="flex-row bg-primary h-8 rounded-2xl justify-center items-center">
                  <TouchableOpacity
                    className="w-[40%] items-center"
                    onPress={() => handleReduceBasket()}
                  >
                    <Text className="text-3xl text-text">-</Text>
                  </TouchableOpacity>
                  <Text className="w-[20%] text-center">{count}</Text>
                  <TouchableOpacity
                    className="w-[40%]"
                    onPress={() => handleAddBasket()}
                  >
                    <Text className="text-2xl text-center">+</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
    </>
  );
};
