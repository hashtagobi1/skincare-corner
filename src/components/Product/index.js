import { Grid, Typography, withStyles, WithStyles } from '@material-ui/core'
import { makeStyles, createTheme } from '@material-ui/core/styles';
import first from '../../obipics/product_pics/1st.png'
import second from '../../obipics/product_pics/2nd.png'
import third from '../../obipics/product_pics/3rd.png'
import fourth from '../../obipics/product_pics/4th.png'
import { motion } from "framer-motion"

const theme = createTheme()

export const useStyles = makeStyles({
    root: {
        // height: '100%'

    },
    product: {
        padding: theme.spacing(5),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#1C1C1C',
        fontFamily: 'Raleway'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '68px',
        paddingBottom: '128px'
    }
})


const Product = (props) => {
    const classes = useStyles(props);


    return (
        <Grid container
            className={classes.root}>



            <Grid
                item
                className={classes.titleContainer}
                xs={12}
                md={12}>

                <motion.div
                    drag
                    dragConstraints={{
                        left: -12,
                        right: -2,
                        top: -12,
                        bottom: -12


                    }}

                >

                    <Typography
                        className={classes.title}>My Current Routine</Typography>

                </motion.div>

            </Grid>







            <Grid
                className={classes.product}
                item
                xs={12}
                md={3}>
                <motion.div
                    whileHover={{
                        scale: 2.5,
                    }}



                >

                    <img src={first} alt="Squalane Cleanser" />
                </motion.div>

            </Grid>


            <Grid
                className={classes.product}
                item
                xs={12}
                md={3}>

                <motion.div
                    whileHover={{
                        scale: 2.5,
                    }}>

                    <img src={second} alt="Hyaluronic Acid 2% + B5" />
                </motion.div>


            </Grid>
            <Grid
                className={classes.product}
                item
                xs={12}
                md={3}>
                <motion.div
                    whileHover={{
                        scale: 2.5,
                    }}

                >


                    <img src={third} alt="Natural Moisturizing Factors + HA" />
                </motion.div>

            </Grid>

            <Grid
                className={classes.product}
                item
                xs={12}
                md={3}>
                <motion.div
                    whileHover={{
                        scale: 2.5,
                    }}
                >

                    <img src={fourth} alt="“Buffet” + Copper Peptides 1%" />
                </motion.div>

            </Grid>


        </Grid>
    )
}

export default (withStyles()(Product));
