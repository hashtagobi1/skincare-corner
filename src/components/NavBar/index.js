import { Grid, Typography, withStyles, WithStyles } from '@material-ui/core'
import { makeStyles, createStyles, createTheme } from '@material-ui/core/styles';
import Logo from '../../obipics/deciem_logo.png'
import SVGLOGO from '../../obipics/deciemSVG.svg'
import {Link} from 'react-router-dom'

const theme = createTheme()

export const useStyles = makeStyles({
    root: {
        
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#1C1C1C',
        fontFamily:'Raleway'

    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: theme.spacing(10),

    },
    image: {
        backgroundImage: `url(${Logo})`
    },
    centering: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:'20px' 
    }

});

const NavBar = (props) => {
    const classes = useStyles(props)
    return (
        <Grid
            className={classes.root}
            container>
            <Grid
                item md={12}
                sm={4}
                className={classes.navigation}>

                <Grid item xs={6} />

                <Grid item xs={6} 
                className={classes.centering}>
                    <Link to='/'><Typography
                        className={classes.text}>
                        dashboard
                    </Typography></Link>
                    <Grid item xs={1}/>
                    <Link to='/routine'><Typography
                        className={classes.text}>
                        routine
                    </Typography></Link>


                </Grid>


                <Grid item xs={3}>

                </Grid>


                <Grid item xs={3}>
                    <img src={SVGLOGO} alt="brand logo" />
                </Grid>



            </Grid>
        </Grid>
    )
}

export default (withStyles()(NavBar));
