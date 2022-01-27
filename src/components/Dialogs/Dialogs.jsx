import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogsItems}>
                    <NavLink activeClassName={classes.activeLink}  to='/dialogs/1'>Andrew</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink activeClassName={classes.activeLink} to='/dialogs/2'>Dmitry</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink activeClassName={classes.activeLink} to='/dialogs/3'>Sasha</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink activeClassName={classes.activeLink} to='/dialogs/4'>Sveta</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink activeClassName={classes.activeLink} to='/dialogs/5'>Valera</NavLink>
                </div>

                <div className={classes.dialog}>
                    <NavLink activeClassName={classes.activeLink} to='/dialogs/6'>Viktor</NavLink>
                </div>

            </div>


            <div className={classes.message}>
                <div className={classes.message}>One</div>
                <div className={classes.message}>Two</div>
                <div className={classes.message}>Free</div>

            </div>


        </div>

    )
}

export default Dialogs;
