import React, { Component }  from 'react';
import store from '../../../store';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width:'40vh'
  },
  container : { 
    marginTop: '2em', 
    height: '40vh'
  },
  fullWidth: {
    width:'100%' 
  },
  text:{
    position:'relative',
    left:'-1em',
    fontSize:'0.9em',
    fontWeight:'bold'
  },
  locationList:{
    listStyleType:'none'
  }
}));


function Voting (){
    const classes = useStyles()
    let state = [];
    let items = [];
    if (store.getState().length !== 0) {
      state = store.getState();
    } else{
      console.log('state is empty ')
    }
   
    state.forEach( i => {
      items.push(
        <Box p={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <p className={classes.text}> Name: {i.name}</p>
              <p className={classes.text}> Address: {i.address}</p>
              <a className={classes.text}> Menu Link: {i.link}</a>
            </Paper>
          </Grid>
        </Box>
      )
    });
    console.log(state) 

    return (
      <div className="Voting">
              <Box
                display="flex"
                flexWrap="nowrap"
                p={1}
                m={1}
                bgcolor="background.paper">
                {items}
              </Box>
      </div>
    );
  }
  
  export default Voting;