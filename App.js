import { Provider } from "react-redux";
import Route from "./src/Route";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
