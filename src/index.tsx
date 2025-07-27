import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { system } from "./theme"; // 👈 updated theme export
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      {" "}
      {/* ✅ use value instead of theme */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
