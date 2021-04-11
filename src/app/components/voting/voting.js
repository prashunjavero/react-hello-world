import React, { Component , useState } from 'react';
import store from '../../../store';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { incrementVoteForLocation,decrementVoteForLocation }  from '../../../actions/actionTypes'

const useForceUpdate = () => useState()[1];

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
    const classes = useStyles();
    const [, updateComponent] = React.useState();
    const forceUpdateComponent = React.useCallback(() => updateComponent({}), []);  
     
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
              <span className={classes.text}>Link : </span> <Link className={classes.text} href={i.link} >{i.link}</Link>
              <Box  display="flex"  style={{marginTop:'1em', marginLeft: '2em'}} >
                <Button  variant="contained" color="primary" onClick={() => {store.dispatch(incrementVoteForLocation(i.name)); forceUpdateComponent();}}  >+</Button>
                <div style={{width:'4em', textAlign:"center"}}><p>{localStorage.getItem(i.name)}</p></div>
                <Button  variant="contained" color="primary" onClick={() => { store.dispatch(decrementVoteForLocation(i.name)); forceUpdateComponent(); }} >-</Button>
            </Box>
            </Paper>
          </Grid>
        </Box>
      )
    });

    return (
      <div className="Voting">
        <h1 style={{marginLeft:'1em'}}>Vote for your favourite lunch place  </h1>
              <Box
                display="flex"
                flexWrap="nowrap"
                p={1}
                m={1}
                bgcolor="background.paper">
                {items}
              </Box>
              {items.length > 0 &&
                    <Box 
                    display='flex' 
                    flexWrap="nowrap"
                    p={1}
                    m={2}>
                      <Button variant="contained" color="primary" 
                      onClick={ () => { 
                        Object.keys(localStorage).forEach(function(key){
                          localStorage.setItem(key.toString(), 0)
                        });
                        forceUpdateComponent();
                      }}>Reset</Button>
                    </Box>
               }
      </div>
    );
  }
  
  export default Voting;