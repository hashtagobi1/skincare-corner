import { Grid, withStyles, WithStyles } from '@material-ui/core'
import { makeStyles, createTheme } from '@material-ui/core/styles';
/*import './App.scss';*/
/*import MyCurrentRoutineStyles from './MyCurrentRoutineStyles'*/
import NavBar from '../../components/NavBar'
import Product from '../AllProducts';



const theme = createTheme()

const useStyles = makeStyles({
  root: {
    // height: '100vh',
    // width: '100vw',
    display: 'flex',
    // marginLeft: theme.spacing(10),
    // marginRight: theme.spacing(10)
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }

});

function MyCurrentRoutine(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}>


      <Grid item xs={12}>
        <NavBar />
      </Grid>

      <Grid
        className={classes.productContainer}
        item xs={12}>

        <Product />

      </Grid>
      ``
    </Grid>
  );
}

export default (withStyles()(MyCurrentRoutine));
