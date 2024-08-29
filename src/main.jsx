import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
