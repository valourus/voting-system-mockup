import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Nederlands online stem systeem
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  )
}
