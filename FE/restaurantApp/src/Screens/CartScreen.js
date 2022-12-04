import { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat } from "simple-currency-format";
import CardDetail from "../components/CardDetail";
import { onLoading } from "../store/slicerOrder";

export default CartScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { basket, totalPrice } = useSelector((state) => state.order);
  useEffect(() => {
    if (basket.length === 0) {
      dispatch(onLoading());
      navigate("HomeScreen");
    }
  }, [basket]);

  return (
    <View className="flex-1">
      <View className="h-[10%] bg-primary rounded-b-3xl">
        <View className="items-center justify-center h-full">
          <Text className="font-bold text-4xl text-text">Order Details</Text>
        </View>
      </View>
      <View className="h-[75%] mx-5">
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 10, paddingBottom: 2 }}
          data={basket}
          renderItem={({ item }) => (
            <CardDetail
              name={item.name}
              amount={item.amount}
              price={item.price}
              imageUrl={item.imageUrl}
              id={item.id}
            />
          )}
        />
      </View>
      <View className="h-[15%] bg-primary rounded-t-3xl">
        <View className="h-[30%] my-2 flex-row mx-5 items-center justify-center ">
          <Text className="font-bold text-text text-2xl">
            Total {currencyFormat(totalPrice, "id-ID", "IDR")}
          </Text>
        </View>
        <View className="h-[50%] w-full">
          <View className="flex-row h-full mx-4 bg-primary rounded-full justify-center">
            <TouchableOpacity className="w-[70%]  bg-secondary justify-center items-center rounded-full">
              <Text className="font-bold text-3xl text-white ">Order</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute h-11 w-full bottom-[84%] items-end px-2">
          <TouchableOpacity
            className="bg-secondary h-full px-4 rounded-full justify-center "
            onPress={() => navigate("HomeScreen")}
          >
            <Text className="text-2xl text-white">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
