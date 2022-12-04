import { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat } from "simple-currency-format";
import CardDetail from "../components/CardDetail";
import { onLoading } from "../store/slicerOrder";

export default CartScreen = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const { basket, totalPrice } = useSelector((state) => state.order);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState({});

  useEffect(() => {
    if (basket.length === 0) {
      dispatch(onLoading());
      navigate("HomeScreen");
    }
  }, [basket]);

  const handleScreen = () => {
    dispatch(onLoading());
    navigate("HomeScreen");
  };

  const handleInput = (name) => (value) => {
    let newInput = {
      ...input,
      [name]: value,
    };
    setInput(newInput);
  };

  const handleOrder = () => {
    if (input) {
      navigate("OrderScreen");
    } else {
      setModal(false);
    }
  };

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
            <TouchableOpacity
              className="w-[70%]  bg-secondary justify-center items-center rounded-full"
              onPress={() => setModal(true)}
            >
              <Text className="font-bold text-3xl text-white ">Order</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute h-11 w-full bottom-[84%] items-end px-2">
          <TouchableOpacity
            className="bg-secondary h-full px-4 rounded-full justify-center "
            onPress={() => handleScreen()}
          >
            <Text className="text-2xl text-white">+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={modal} transparent={true} animationType={"fade"}>
        <View className="h-full w-full justify-center items-center">
          <View className=" bg-primary rounded-2xl w-[60%] h-[25%] justify-center items-center">
            <View className="h-[15%]  justify-center">
              <Text className="text-text text-base font-bold">No Table </Text>
            </View>
            <View className="h-[15%] mb-3 w-[35%] border rounded-2xl items-center">
              <TextInput
                onChangeText={(value) => handleInput("no")(value)}
                keyboardType="number-pad"
                className="w-[30%] h-full "
              />
            </View>
            <View className="h-[16%] w-[75%] items-center justify-between flex-row">
              <TouchableOpacity
                className="bg-secondary w-[40%] h-full justify-center items-center rounded-2xl"
                onPress={() => setModal(false)}
              >
                <Text className="font-bol text-white">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-secondary w-[40%] h-full justify-center items-center rounded-2xl "
                onPress={() => handleOrder()}
              >
                <Text className="text-white font-bold">Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
