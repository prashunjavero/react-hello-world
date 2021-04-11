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

import './home.css';

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
  const { register, handleSubmit, control, errors } = useForm();
  // todo: should dispatch action for valid data
  const onSubmit = data => console.log(data);

    return (
      <Container className={classes.container}  >
          <Grid item xs={12}>
            <h1>Add Lunch Place </h1>
            <Paper className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
              <FormGroup>
                  <FormLabel><h5> Name </h5></FormLabel>
                  <FormInput name="name" label="Name" control={control} />
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