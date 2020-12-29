import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={logo} width={60} height={40} alt="icon" tooltip="" title="icon"/>
          </IconButton>
          <Typography variant="h6" color='secondary' className={classes.title}>
            ToDoList
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
