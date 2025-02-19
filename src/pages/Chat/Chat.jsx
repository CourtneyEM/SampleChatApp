import React, { useEffect, useState } from "react";
import { ChatDataService } from "Shared/ChatDataService";
import { useParams, matchPath, useLocation } from "react-router-dom";
import ChatBubble from "./ChatBubble/ChatBubble";
import {
  ChatBoxContainer,
  ChatContainer,
  MessengerContainer,
  TextBoxContainer,
} from "./styles";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { UserDataService } from "Shared/UserDataService";
import SendIcon from "@mui/icons-material/Send";
import { CHAT } from "Pages/Routes/RoutesConfig";

function Chat() {
  const { id } = useParams();
  const location = useLocation();
  const userDataService = new UserDataService().Use();
  const chatDataService = new ChatDataService().Use();
  const messages = chatDataService.getChatMessages(id);
  const [nextMessage, setNextMessage] = useState();

  const onMessageSubmit = () => {
    chatDataService.addMessage(
      id,
      userDataService.CurrentUser.userId,
      nextMessage,
    );
    userDataService.LastChatId = id;
    setNextMessage("");
  };

  const onChange = (e) => {
    if (e.target.value != "\n") {
      setNextMessage(e.target.value);
    } else {
      e.target.value = "";
    }
  };

  const onEnter = (e) => {
    if (e.key == "Enter" && nextMessage?.trim()) {
      onMessageSubmit();
    }
  };

  useEffect(() => {
    if (!matchPath(location.pathname, CHAT)) {
      setNextMessage("");
    }
  }, [location.pathname]);

  return (
    <MessengerContainer>
      <ChatBoxContainer>
        <ChatContainer>
          <span className="scroll-start-at-top"></span>
          {messages?.messages?.map((x) => (
            <ChatBubble
              participants={messages?.participantIds?.length}
              {...x}
            />
          ))}
        </ChatContainer>
        <TextBoxContainer>
          <TextField
            multiline
            maxRows={3}
            value={nextMessage}
            onChange={onChange}
            onKeyDown={onEnter}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={"Send"}
                      disabled={!nextMessage}
                      onClick={onMessageSubmit}
                      edge="end"
                    >
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </TextBoxContainer>
      </ChatBoxContainer>
    </MessengerContainer>
  );
}

export default Chat;
