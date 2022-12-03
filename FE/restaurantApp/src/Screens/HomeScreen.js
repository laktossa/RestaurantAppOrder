import { useEffect } from "react";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";

export default HomeScreen = ({ navigation: { navigate } }) => {
  const [food, setFood] = useState([
    {
      id: 1,
      name: "sate",
      price: 20000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
    },
    {
      id: 2,
      name: "soto",
      price: 10000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
    },
    {
      id: 3,
      name: "tahu",
      price: 5000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
    },
    {
      id: 4,
      name: "tahu isi",
      price: 5000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
    },
    {
      id: 5,
      name: "tahu bulat",
      price: 5000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/5nxLKIp3cPfPnv7ZYjPb.png",
    },
    {
      id: 6,
      name: "tahu sutra",
      price: 5000,
      imageUrl:
        "https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/nhj93oZApoMavF1lC6Wm.png",
    },
  ]);

  const { countBasket, totalPrice, basket } = useSelector(
    (state) => state.order
  );
  const [end, setEnd] = useState(false);
  const [padding, setPadding] = useState({ paddingTop: 10, paddingBottom: 0 });
  const [styleScroll, setStyleScroll] = useState(
    "absolute bottom-[2%] left-5 w-[90%] rounded-3xl h-10 bg-blue-400"
  );

  useEffect(() => {
    if (countBasket === 0) {
      setPadding({ paddingTop: 10, paddingBottom: 0 });
    } else {
      setPadding({ paddingTop: 10, paddingBottom: 50 });
    }
  }, [countBasket]);

  return (
    <>
      <View>
        <View className="bg-red-400 justify-center h-[10%] mx-1 rounded-b-2xl">
          <Text className="font-bold text-4xl text-center">
            Juna's Restaurant
          </Text>
        </View>
        <View className="h-[90%]">
          <Pressable></Pressable>
          <View className="px-4">
            <FlatList
              contentContainerStyle={padding}
              onScroll={() => {
                setTimeout(() => {
                  setStyleScroll(
                    "absolute hidden bottom-[2%] left-5 w-[90%] rounded-3xl h-10 bg-blue-400"
                  );
                }, 0);
              }}
              onMomentumScrollEnd={() => {
                setTimeout(() => {
                  setStyleScroll(
                    "absolute bottom-[2%] left-5 w-[90%] rounded-3xl h-10 bg-blue-400"
                  );
                }, 0);
              }}
              // onEndReached={() => {
              //   setStyleScroll(
              //     "absolute bottom-[2%] left-5 w-[90%] rounded-3xl h-10 bg-blue-400"
              //   );
              // }}
              showsVerticalScrollIndicator={false}
              key={food.id}
              data={food}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              )}
            />
          </View>
          {countBasket > 0 ? (
            <>
              <View className={styleScroll}>
                <TouchableOpacity
                  className="items-center h-full justify-center"
                  onPress={() => navigate("CartScreen")}
                >
                  <Text className="font-bold">
                    Total Price Rp. {totalPrice}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <></>
          )}
        </View>
      </View>
    </>
  );
};
