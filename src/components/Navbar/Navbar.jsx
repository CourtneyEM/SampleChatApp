import React, { useEffect, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Paper } from "@mui/material";
import { useLocation, matchPath, useHistory } from "react-router-dom";
import { CHAT, HOME } from "Pages/Routes/RoutesConfig";
import { UserDataService } from "Shared/UserDataService";

function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState(HOME);
  const userDataService = new UserDataService().Use();

  const onNavClick = (_, val) => {
    if (val === CHAT) {
      // there's a better function for replacing path parameters
      val = `/chat/${userDataService.LastChatId}`;
    }
    history.push(val);
  };

  useEffect(() => {
    const pathType = [CHAT, HOME].find((x) => matchPath(location.pathname, x));

    const val = pathType ?? HOME;
    setValue(val);
  }, []);

  return (
    <Paper
      sx={{
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        scrollbarWidth: "none",
      }}
      elevation={3}
    >
      <BottomNavigation showLabels value={value} onChange={onNavClick}>
        <BottomNavigationAction label="Home" value={HOME} icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Chat"
          value={CHAT}
          icon={<ChatBubbleIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Navbar;
