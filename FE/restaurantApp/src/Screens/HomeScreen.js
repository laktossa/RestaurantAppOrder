import { useEffect } from "react";
import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { currencyFormat } from "simple-currency-format";
import Card from "../components/Card";
import { getMenuList, offLoading } from "../store/slicerOrder";

export default HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { countBasket, totalPrice, menu, loading, burger } = useSelector(
    (state) => state.order
  );
  const [menus, setMenus] = useState(menu);
  const [category, setCategory] = useState("");
  const [padding, setPadding] = useState({ paddingTop: 10, paddingBottom: 0 });
  const [styleScroll, setStyleScroll] = useState(
    "absolute bottom-[2%] left-5 w-[90%] rounded-3xl h-11 bg-primary"
  );

  const handelCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    if (countBasket === 0) {
      setPadding({ paddingTop: 10, paddingBottom: 0 });
    } else {
      setPadding({ paddingTop: 10, paddingBottom: 60 });
    }
  }, [countBasket]);

  useEffect(() => {
    dispatch(getMenuList());
  }, []);

  useEffect(() => {
    let data = menu.filter((e) => e.category === category);
    setMenus(data);
  }, [category]);

  useEffect(() => {
    if (!loading) {
      setMenus(burger);
    }
    dispatch(offLoading());
  }, [loading]);

  return (
    <>
      <View>
        {loading ? (
          <>
            <View className="justify-center items-center h-full">
              <ActivityIndicator size={"large"} color={"#DA291C"} />
              <Text>Loading</Text>
            </View>
          </>
        ) : (
          <>
            <View className="bg-primary justify-center h-[10%] rounded-b-2xl">
              <Text className="font-bold text-4xl text-center">
                Juna's Restaurant
              </Text>
            </View>
            <View className="h-[86%]">
              <Pressable></Pressable>
              <View className="px-4">
                <FlatList
                  contentContainerStyle={padding}
                  onScroll={() => {
                    setStyleScroll(
                      "absolute hidden bottom-[2%] left-5 w-[90%] rounded-3xl h-11 bg-primary"
                    );
                  }}
                  onMomentumScrollEnd={() => {
                    setTimeout(() => {
                      setStyleScroll(
                        "absolute bottom-[2%] left-5 w-[90%] rounded-3xl h-11 bg-primary"
                      );
                    }, 100);
                  }}
                  showsVerticalScrollIndicator={false}
                  key={menus.id}
                  data={menus}
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
              <View className="h-[10%] bg-primary rounded-t-2xl">
                <View className="flex-row items-center h-full mx-1">
                  <TouchableOpacity
                    className=" h-[50%] border-r-2 w-[25%] justify-center items-center"
                    onPress={() => handelCategory("burger")}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/burger.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[50%] border-x-2 w-[25%] justify-center items-center"
                    onPress={() => handelCategory("chicken")}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/chicken-leg.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className=" h-[50%] border-x-2 w-[25%] justify-center items-center"
                    onPress={() => handelCategory("drink")}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/soft-drink.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className=" h-[50%] border-l-2 w-[25%] justify-center items-center"
                    onPress={() => handelCategory("iceCream")}
                  >
                    <Image
                      resizeMode="contain"
                      source={require("../../assets/ice-cream.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {countBasket > 0 ? (
                <>
                  <View className={styleScroll}>
                    <TouchableOpacity
                      className="items-center h-full justify-center"
                      onPress={() => navigation.navigate("CartScreen")}
                    >
                      <Text className="font-bold text-text text-xl">
                        Total Price {currencyFormat(totalPrice, "id-ID", "IDR")}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <></>
              )}
            </View>
          </>
        )}
      </View>
    </>
  );
};
