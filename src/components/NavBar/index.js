import { Grid, Typography, withStyles, WithStyles } from '@material-ui/core'
import { makeStyles, createStyles, createTheme } from '@material-ui/core/styles';
import Logo from '../../obipics/deciem_logo.png'
import SVGLOGO from '../../obipics/deciemSVG.svg'

const theme = createTheme()

export const useStyles = makeStyles({
    root: {
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#1C1C1C'
    },
    navigation: {
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: theme.spacing(10),
        // paddingTop: '80px',

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

const NavBar = () => {
    const classes = useStyles()
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
                spacing-xs-12
                className={classes.centering}>
                    <Typography
                        className={classes.text}>
                        dashboard
                    </Typography>
                    <Grid item xs={1}/>
                    <Typography
                        className={classes.text}>
                        routine
                    </Typography>


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
