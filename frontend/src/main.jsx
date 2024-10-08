import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./store/Store.js";
import { Toaster } from "react-hot-toast";

const customStyles = {
  success: {
    backgroundColor: "#16C60C",
    color: "white",
    duration: 3000,
  },
  error: {
    backgroundColor: "#F03A17",
    duration: 6000,
    color: "white",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster
          toastOptions={{
            position: "top-center",
            success: {
              style: { ...customStyles.success },
              iconTheme: {
                primary: "#fff",
                secondary: "green",
              },
            },
            error: {
              style: { ...customStyles.error },
              iconTheme: {
                primary: "#fff",
                secondary: "red",
              },
            },
          }}
        />
              <App />
        </PersistGate>
      </Provider>
  </React.StrictMode>
);
