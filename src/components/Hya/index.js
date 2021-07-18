import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Grid, Typography, withStyles, Button, WithStyles, Link, Paper, Popover, Modal } from '@material-ui/core'
import { makeStyles, createTheme } from '@material-ui/core/styles';
import NavBar from "../NavBar";
import first from '../../obipics/product_pics/4th.png'
import left from "../../obipics/icons/left.png"
import right from "../../obipics/icons/right.png"
import Days from "../../obipics/Days.png"
import Calendar from "../../obipics/Calendar.png"
import Share from "../../obipics/share.png"
import React, { useState } from 'react'
import Instagram from '../../obipics/InstagramLogo.png'
import Email from '../../obipics/Envelope.png'
import Facebook from '../../obipics/MessengerLogo.png'
import Twitter from '../../obipics/TwitterLogo.png'
import { Link as SwitchLink } from "react-router-dom";


const theme = createTheme()

export const useStyles = makeStyles({
    root: {
        // height: '100%'

    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#1C1C1C',
        fontFamily: 'Raleway'
    },
    titleContainer: {
        paddingTop: '68px',
        paddingBottom: '64px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: '50px',
        // border: '1px solid green'

    },
    imageSize: {
        height: '100%'
        // scale: 7
    },
    smallText: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#1C1C1C',
        fontFamily: 'Raleway'
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid red',
        height: "100%"
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid blue',

    },
    subTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1C1C1C',
        fontFamily: 'Raleway',
        paddingBottom: '56px'
    },
    calendarTitle: {
        fontSize: 21.12,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#1C1C1C',
        fontFamily: 'Raleway'
    },
    header: {
        // backgroundColor: '#eee',
        // width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

    }, bottomContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '1px solid black',

    }, leftBottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // border: '10px solid black',

    }, rightBottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // border: '10px solid red',

    }, buttonText: {

        fontSize: 18,
        fontWeight: 600,
        textTransform: 'capitalize',
        color: '#FFFFFF',
        fontFamily: 'Raleway',
    },
    button: {
        backgroundColor: '#1C1C1C',
        marginRight:"44px"
    },
    paper: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        borderRadius: 20,
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modalText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#1C1C1C',
        fontFamily: 'Raleway',
        paddingBottom: '56px'
    },
    grid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socials: {
        display: 'flex',
    }

})

function getModalStyle() {
    const top = 50 + Math.random();
    const left = 50 + Math.random();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Hya = ({ title }) => {
    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false)
    const [modalStyle] = useState(getModalStyle);

    const handleOpen = () => {
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }


    return (
        <Grid container>

            <Grid item xs={12}>
                <NavBar />
            </Grid>

            <Grid
                container
            >
                <Grid item xs={12}
                    className={classes.titleContainer}
                >
                    <Typography className={classes.title}>Hyaluronic Acid 2% + B5</Typography>
                </Grid>

            </Grid>


            <Grid container
            >

                <Grid item xs={12}
                    className={classes.mainContent}
                >




                    <Grid item xs={6}
                        className={classes.left}>
                        <img
                            className={classes.imageSize}
                            src={first} alt="Hya" />


                    </Grid>


                    <Grid item xs={6}
                        className={classes.right}>


                        <Grid item xs={12}>

                            <Typography className={classes.subTitleText}>
                                You started using this on the 8th of June 2021
                            </Typography>

                        </Grid>




                        <Grid item xs={12}
                            className={classes.header}
                        >


                            <img src={Calendar} alt="days" />
                        </Grid>










                    </Grid>
                </Grid>

            </Grid>
            <Grid container>

                <Grid item xs={12}
                    className={classes.bottomContainer}>

                    <Grid item xs={6}

                        className={classes.leftBottom}>



                        <Typography
                            className={classes.smallText}
                        >
                            <Link
                                target="_blank"
                                href="https://deciem.com/gb/search?q=Hyaluronic%20Acid%202%25%20%2B%20B5">
                                Running low?

                            </Link>

                        </Typography>
                    </Grid>


                    <Grid item xs={6}
                        className={classes.rightBottom}>

                        <Link to="/Logging">

                            <Button

                                variant="contained"
                                className={classes.button}

                            >

                                <Typography
                                    className={classes.buttonText}>Log Entry</Typography>

                            </Button>
                        </Link>

                        <Modal
                            open={openModal}
                            onClose={handleClose}
                        >
                            <Paper
                                style={modalStyle}
                                className={classes.paper}
                            >

                                <Grid container>

                                    <Grid item xs={12}
                                        className={classes.grid}
                                    >
                                        <Typography
                                            className={classes.modalText}>Share</Typography>

                                    </Grid>

                                    <Grid item xs={12}
                                        className={classes.socials}>

                                        <Grid item xs={3}>

                                            <a
                                                target="_blank"
                                                // rel="noreferrer" 
                                                href="https://twitter.com/">
                                                <img src={Twitter} alt="social" />

                                            </a>
                                        </Grid>
                                        <Grid item xs={3}>

                                            <a
                                                target="_blank"
                                                // rel="noreferrer" 
                                                href="https://twitter.com/">
                                                <img src={Email} alt="social" />

                                            </a>
                                        </Grid>
                                        <Grid item xs={3}>

                                            <a
                                                target="_blank"
                                                // rel="noreferrer" 
                                                href="https://twitter.com/">
                                                <img src={Facebook} alt="social" />

                                            </a>
                                        </Grid>
                                        <Grid item xs={3}>

                                            <a
                                                target="_blank"
                                                // rel="noreferrer" 
                                                href="https://twitter.com/">
                                                <img src={Instagram} alt="social" />

                                            </a>
                                        </Grid>






                                    </Grid>
                                </Grid>



                            </Paper>
                        </Modal>


                        {/* ! will create popover */}



                        <img src={Share} 
                            onClick={handleOpen}
                            alt="share button" />




                    </Grid>


                </Grid>
            </Grid>
        </Grid>




    )
}

export default Hya
