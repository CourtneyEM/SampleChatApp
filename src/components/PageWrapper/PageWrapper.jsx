import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import Navbar from "Components/Navbar/Navbar";
import { ContentContainer, PageContainer } from "./styles";
import Header from "Components/Header/Header";

function PageWrapper({ children }) {
  return (
    <IonPage>
      <IonContent>
        <PageContainer>
          <Header />
          <ContentContainer>{children}</ContentContainer>
          <Navbar />
        </PageContainer>
      </IonContent>
    </IonPage>
  );
}

export default PageWrapper;
