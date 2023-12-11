import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>
      <MainContainer/>
    </div>
    </Provider>
  );
}

export default App;
