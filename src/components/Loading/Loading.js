import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import './Loading.css'

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

export default function Animations() {
    const classes = useStyles();
    return (
        <div className='loading'>
            <div className={classes.root}>
            <img id='load-img' src="https://i.ibb.co/1fZhQph/logo2.png" animation="wave" alt=""/>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton animation={false} />
                <Skeleton animation="wave" />
            </div>
        </div>
    );
}