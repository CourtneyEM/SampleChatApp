import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Bubble = styled(Card)`
  display: flex;
  width: fit-content;
  max-width: 66%;

  padding: 6px 10px;
  border-radius: 5px 0 5px 5px;

  position: relative;
  overflow: visible;

  ::after {
    content: "";
    width: 16px;
    height: 12px;
    position: absolute;
  }
`;

export const RightBubble = styled(Bubble)`
  align-self: flex-end;
  margin-right: 15px;
  background-color: #0084ff;
  color: white;

  ::after {
    bottom: -2px;
    right: -16px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    box-shadow:
      -9px 3px 0px 1px #0084ff,
      -9px 7px 3px -1px rgba(0, 0, 0, 0.5);
  }
`;

export const LeftBubble = styled(Bubble)`
  margin-left: 15px;
  background-color: #eee;

  ::after {
    bottom: -2px;
    left: -16px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    box-shadow:
      9px 3px 0px 1px #eee,
      9px 7px 3px -1px rgba(0, 0, 0, 0.5);
  }
`;

export const BubbleContainer = styled.div`
  display: flex;

  &.right {
    align-self: flex-end;

    justify-content: right;
  }

  .MuiAvatar-root {
    font-size: 9px;
    width: 20px;
    height: 20px;
    margin-top: auto;
    margin-bottom: -10px;
    margin-left: 5px;
    margin-right: -5px;
  }
`;
