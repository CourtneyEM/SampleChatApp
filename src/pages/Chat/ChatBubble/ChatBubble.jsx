import React from "react";
import { UserDataService } from "Shared/UserDataService";
import { stringAvatar } from "Shared/avatar";
import { BubbleContainer, LeftBubble, RightBubble } from "./styles";
import { Avatar } from "@mui/material";

function ChatBubble({ participants, icon, userId, text }) {
  const userDataService = new UserDataService().Use();
  const user = userDataService.getUser(userId);
  const isCurrentUser = userDataService.CurrentUser.userId === user.userId;
  const avatarConfig = icon ? { src: icon } : stringAvatar(user?.name);
  const BubbleComponent = isCurrentUser ? RightBubble : LeftBubble;

  return (
    <BubbleContainer className={isCurrentUser ? "right" : "left"}>
      {participants > 2 && !isCurrentUser && (
        <Avatar alt={user?.name} {...avatarConfig} />
      )}
      <BubbleComponent>{text}</BubbleComponent>
    </BubbleContainer>
  );
}

export default ChatBubble;
