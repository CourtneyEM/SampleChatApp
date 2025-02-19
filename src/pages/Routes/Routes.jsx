import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { CHAT, HOME } from "./RoutesConfig";
import Home from "Pages/Home/Home";
import Chat from "Pages/Chat/Chat";
import PageWrapper from "Components/PageWrapper/PageWrapper";

function Routes() {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={CHAT}>
          <PageWrapper>
            <Chat />
          </PageWrapper>
        </Route>
        <Route path={HOME} exact>
          <PageWrapper>
            <Home />
          </PageWrapper>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
