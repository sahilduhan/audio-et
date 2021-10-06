import React from "react";
import {
  List as MUIlist,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Icon,
} from "@material-ui/core";
import { MoneyOff, Delete } from "@material-ui/icons";
import useStyles from "./styles";
const List = () => {
  const classes = useStyles();
  return <MUIlist dense={false}></MUIlist>;
};

export default List;
