import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ChatContainer = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 15px;
  height: 100%;
  overflow: auto;
  scrollbar-width: none;
  padding-bottom: 20px;
  padding-top: 20px;

  flex-direction: column-reverse;
  .scroll-start-at-top {
    flex: 1 1 0%;
  }
`;

export const MessengerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-flow: column;
`;

export const TextBoxContainer = styled(Box)`
  display: flex;
  width: 100%;
  bottom: 0;
  position: relative;
  justify-content: center;
  background-color: white;
  padding-top: 20px;
  margin-top: auto;

  .MuiTextField-root {
    width: 80%;
    margin-bottom: 20px;

    .MuiInputBase-root {
      border-radius: 10px;
    }
  }
`;

export const ChatBoxContainer = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column;
`;
