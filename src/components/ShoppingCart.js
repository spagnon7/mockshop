import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  shoppingCartContainer: {
    minWidth: 200,
    width: "35%",
  },
});

const ShoppingCartTab = () => {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.shoppingCartContainer}>
      <Typography>This is the shopping cart tab</Typography>
    </Paper>
  );
};

export default ShoppingCartTab;
