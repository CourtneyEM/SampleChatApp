import { Avatar, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { ChatHeader, StyledCard } from "./styles";
import { useHistory } from "react-router-dom";
import { stringAvatar } from "Shared/avatar";
import { UserDataService } from "Shared/UserDataService";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const ChatCard = ({ id, icon, name, lastMessage }) => {
  const avatarConfig = icon ? { src: icon } : stringAvatar(name);
  const userDataService = new UserDataService().Use();
  const history = useHistory();

  const getDate = (date) => {
    const sentOn = new Date(date);
    const today = new Date();
    const weekAgo = new Date().setDate(today.getDate() - 7);

    const isToday =
      new Date(sentOn).setHours(0, 0, 0, 0) ==
      new Date(today).setHours(0, 0, 0, 0);
    const isWithinWeek = sentOn >= weekAgo;

    if (isToday) {
      const hours = sentOn.getHours() % 12 > 0 ? sentOn.getHours() % 12 : 12;
      const ampm = sentOn.getHours() >= 12 ? "PM" : "AM";
      return `${hours}:${sentOn.getMinutes().toString().padStart(2, "0")} ${ampm}`;
    } else if (isWithinWeek) {
      return days[sentOn.getDay()];
    } else {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(sentOn);
    }
  };

  const onClick = () => {
    userDataService.LastChatId = id;
    history.push(`/chat/${id}`);
  };

  return (
    <StyledCard elevation={0} onClick={onClick}>
      <Grid container direction={"row"}>
        <Grid size={{ xs: 1.5 }}>
          <Avatar alt={name} {...avatarConfig} />
        </Grid>
        <Grid size={{ xs: 10.25 }}>
          <ChatHeader>
            <Typography variant="h2" fontSize={16} fontWeight={600}>
              {name}
            </Typography>
            <Typography color="rgba(0, 0, 0, 0.5)" fontSize={14}>
              {getDate(lastMessage?.sentOnUtc)}
            </Typography>
          </ChatHeader>
          <div>
            <Typography fontSize={14} color="rgba(0, 0, 0, 0.5)">
              {lastMessage?.text}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ChatCard;
