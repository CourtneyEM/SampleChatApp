import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import _ from "lodash";
import "@ionic/react/css/core.css";
import { IonApp } from "@ionic/react";

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

root.render(
  <IonApp>
    <Main />
  </IonApp>,
);
