import { Grid, withStyles, WithStyles } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './App.scss';
import appStyles from './appStyles'
import  NavBar from './components/NavBar'

const useStyles = makeStyles({
  root: {
    // backgroundColor: 'pink'
  },
});

function App(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}>
      <Grid item xs={12}>

        <NavBar />
      </Grid>

    </Grid>
  );
}

export default (withStyles()(App));
