import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider
        theme={{
          fontFamily: "Roboto Flex",
          headings: {
            fontFamily: "Libre Baskerville",
            fontWeight:500,
          },
        }}
      >
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
