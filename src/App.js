import React  from "react"
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
  grid:{
    width:'100%',
    height: '1000%',
    margin: '0px'
  },
  paper:{
    padding: theme.spacing(2),
    textAlign:'center',
    color: theme.palette.text.secondary,
    background: theme.palette.success.light,
  }
}));



function App() {
  const classes = useStyles();
  return (
      <Grid container spacing = {2} className = {classes.grid}>
        <Grid item lg={12}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={classes.paper}>3</Paper>
        </Grid>
      </Grid>
  );  
}

export default App;
