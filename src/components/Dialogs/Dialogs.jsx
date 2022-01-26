import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={`${classes.dialogsItems} ${classes.active}`}>
                    Andrew
                </div>
                <div className={classes.dialog}>
                    Dmitry
                </div>

                <div className={classes.dialog}>
                    Sasha
                </div>

                <div className={classes.dialog}>
                    Sveta
                </div>

                <div className={classes.dialog}>
                    Valera
                </div>

                <div className={classes.dialog}>
                    Viktor
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
