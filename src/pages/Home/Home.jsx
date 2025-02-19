import ChatCard from "Pages/Home/ChatCard/ChatCard";
import React from "react";
import { ChatContainer, HomeContainer } from "./styles";
import { UserDataService } from "Shared/UserDataService";
import { ChatDataService } from "Shared/ChatDataService";

function Home() {
  const userDataService = new UserDataService().Use();
  const chatDataService = new ChatDataService().Use();
  const users = userDataService.Users;
  const currentUser = userDataService.CurrentUser;

  const getUserChats = () => {
    const userChats = structuredClone(
      chatDataService.getUserMessages(currentUser.userId),
    );

    const mappedChats = userChats
      .map((x) => {
        let lastMessage = x.messages[0];
        const lastMessageUser =
          lastMessage?.userId === currentUser.userId
            ? "Me"
            : users.find((y) => y.userId === lastMessage?.userId)?.name;

        if (!lastMessage) {
          lastMessage = { text: "New Chat..." };
        } else if (
          x.participantIds.length >= 3 ||
          lastMessage?.userId === currentUser.userId
        ) {
          lastMessage.text = `${lastMessageUser}: ${lastMessage.text}`;
        }

        return {
          id: x.id,
          name:
            x.name ??
            x.participantIds
              ?.filter((x) => x !== currentUser.userId)
              ?.flatMap((y) => users.find((z) => z.userId === y)?.name)
              ?.join(", "),
          lastMessage,
        };
      })
      .sort(
        (a, b) =>
          new Date(b.lastMessage.sentOnUtc).getTime() -
          new Date(a.lastMessage.sentOnUtc).getTime(),
      );

    return mappedChats;
  };

  return (
    <HomeContainer>
      <ChatContainer>
        {getUserChats()?.map((x) => (
          <ChatCard {...x} />
        ))}
      </ChatContainer>
    </HomeContainer>
  );
}

export default Home;
