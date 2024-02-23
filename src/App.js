// import logo from "./logo.svg";
import "./App.css";
import "./components/header.js";
import Hreader from "./components/header.js";
import Footer from "./components/footer.js";
import Game from "./components/game.js";
import Api from "./components/Api.js";
import Postapi from "./components/postapi.js";
import Reduxee from "./components/reduxee.js";
import { Provider } from "react-redux";
import { store } from "./components/utils/redux/store.js";
import RW from "./components/etherss/rw.js";
import Eventdisplay from "./components/etherss/eventdisplay.js";
function App() {
  return (
    <div>
      <RW />
      <Eventdisplay />
      {/* <Provider store={store}>
        <Reduxee /> 
      </Provider> */}
      {/* <Postapi /> */}
      {/* <Api /> */}
      {/* <Game /> */}
      {/* <Hreader /> */}
      {/* <Footer title="this is third pae" /> */}
    </div>
  );
}

export default App;
