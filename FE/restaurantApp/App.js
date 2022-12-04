import { Provider } from "react-redux";
import store from "./src/store/orderStore";
import MainStack from "./src/router/MainStack";
import OrderScreen from "./src/Screens/OrderScreen";

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
      {/* <OrderScreen /> */}
    </Provider>
  );
}
