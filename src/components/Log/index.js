import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Grid, Typography, withStyles, Button, WithStyles, Link, Paper, Popover, Modal } from '@material-ui/core'
import { makeStyles, createTheme } from '@material-ui/core/styles';
import NavBar from "../NavBar";
import first from '../../obipics/product_pics/1st.png'
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
import question from "../../obipics/question.png"
import down from "../../obipics/CaretDown.png"
import back from "../../obipics/back.png"
const theme = createTheme()

export const useStyles = makeStyles({



    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#1C1C1C',
        fontFamily: 'Raleway'
    },
    titleContainer: {
        paddingTop: '68px',
        paddingBottom: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerHold: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {

        fontSize: 18,
        fontWeight: 600,
        textTransform: 'capitalize',
        color: '#FFFFFF',
        fontFamily: 'Raleway',
    },
    button: {
        backgroundColor: '#1C1C1C',
        padding: "17px 26px",
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        marginTop: "20px",
        marginBottom: "14px"
    },
    paper: {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 119,
        borderRadius: 20,
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
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
        marginTop: "50px"
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

const Log = () => {
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

            <Grid item xs={12}

                className={classes.titleContainer}>
                <Typography
                    className={classes.title}>log entry</Typography>
            </Grid>

            <Grid item xs={12}
                className={classes.centerHold}
            >

                <img src={question} alt="questions" />
            </Grid>

            <Grid item xs={12}
                className={classes.bottom}
            >
                {/* <Grid item xs={12}
                    className={classes.arrow}>
                    <img src={down} alt="downbutton" />

                </Grid> */}

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        className={classes.button}
                        onClick={handleOpen}
                    // href="/routine"

                    >
                        <Typography
                            className={classes.buttonText}>Save Entry</Typography>

                    </Button>

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
                                        className={classes.modalText}>Entry Saved</Typography>

                                </Grid>


                            </Grid>



                        </Paper>
                    </Modal>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Log
