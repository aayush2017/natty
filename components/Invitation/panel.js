import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import recPanel from "./recPanel.PNG";
const SentPanel = ({ val, innerVal, index }) => {
  return (
    <Box className="main-content main-content-container" key={index}>
      <Box className="upper-content">
        <Typography component="span" className="textInsideUpperContent">
          {innerVal}&nbsp;
        </Typography>
        <Typography>{val}</Typography>
      </Box>
    </Box>
  );
};

const RecievedPanel = ({ val, innerVal, index }) => {
  return (
    <div className={"wi"}>
      <img src={recPanel} />
    </div>
  );
};

export { SentPanel, RecievedPanel };
