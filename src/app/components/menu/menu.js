import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dashboard from '../dashboard/dashboard';
import Home from '../home/home';
import Voting from '../voting/voting';
import Grid from '@material-ui/core/Grid'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textAlign: 'center'
  },
  title: {
    flexGrow: 1
  },
  link:{
      color:'white',
      textDecoration: 'none'
  }
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <Router>
        <div className="AppBar">
        <AppBar position="static">
            <Toolbar>
                <Grid item xs={1}>
                <Typography variant="h6" className={classes.title}>
                    <Button>
                        <Link to="/" 
                            className={classes.link}
                            variant="body2">Home</Link>
                    </Button>
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h6" className={classes.title}>
                        <Button>
                            <Link to="/vote" 
                                className={classes.link}
                                variant="body2">Page</Link>
                        </Button>
                    </Typography>
                </Grid>
                    <Grid item xs={1}>
                    <Typography variant="h6" className={classes.title}>
                        <Button>
                            <Link to="/dashboard" 
                                className={classes.link}
                                variant="body2">Dashboard</Link>
                        </Button>
                        </Typography>
                    </Grid>
            </Toolbar>
        </AppBar>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/vote">
                <Voting />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
        </div>
    </Router>
 
  );
}
