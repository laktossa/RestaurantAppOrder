import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CardDetail from "../components/CardDetail";

export default CartScreen = ({ navigation: { navigate } }) => {
  const { basket, totalPrice } = useSelector((state) => state.order);
  return (
    <View className="flex-1">
      <View className="h-[10%] bg-red-400 rounded-b-2xl mx-1">
        <View className="items-center justify-center h-full">
          <Text className="font-bold text-4xl">Order Details</Text>
          <TouchableOpacity onPress={() => navigate("HomeScreen")}>
            <Text>back</Text>
          </TouchableOpacity>
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
            />
          )}
        />
      </View>
      <View className="h-[15%] bg-red-400 rounded-t-2xl mx-1 justify-center">
        <View className="h-[20%] mb-2 flex-row mx-5 justify-between">
          <Text>Total Price</Text>
          <Text>{totalPrice}</Text>
        </View>
        <TouchableOpacity className="h-[40%] bg-blue-300 justify-center items-center rounded-full mx-5 ">
          <Text>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
