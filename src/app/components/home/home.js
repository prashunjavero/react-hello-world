import store from '../../../store';
import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormInput from '../../../util/formInput';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import { FormGroup } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import { createLocation }  from '../../../actions/actionTypes';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  container : { 
    marginTop: '2em', 
    height: '40vh'
  },
  fullWidth: {
    width:'100%' 
  }
}));


function Home (){
  const classes = useStyles();
  let history = useHistory();
  const { register, handleSubmit, watch, setError, errors , control} = useForm();
  const onSubmit = (data) => {
    // todo : dispatch only when qll fields are valid 
    // todo : add error of the input text
      store.dispatch(createLocation(data));
      history.push('/vote')
  };

    return (
      <Container className={classes.container}  >
          <Grid item xs={12}>
            <h1>Add Lunch Place </h1>
            <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
              <FormGroup>
                  <FormLabel><h5> Name {errors}</h5></FormLabel>
                  <FormInput name="name" label="Name" control={control}/>
               </FormGroup>
               <FormGroup>
                  <FormLabel><h5> Address </h5></FormLabel>
                  <FormInput name="address" label="Address" control={control} />
               </FormGroup>
               <FormGroup>
                  <FormLabel><h5> Link To Menu </h5></FormLabel>
                  <FormInput name="link" label="Link" control={control} />
               </FormGroup>
                  <Grid container justify='flex-end'>
                    <Button style={{ marginTop:'1em'}} variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                  </Grid>
              </form>
            </Paper>
          </Grid>
      </Container>
    );
  }
  
  export default Home;