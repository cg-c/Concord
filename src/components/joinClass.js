import React from 'react';
import { TextField, DialogActions } from '@mui/material';
import { Button } from 'react-bootstrap';

const JoinClass = () => {




    return (

        <div>

            <p>
                Enter your course code to join a class:
            </p>

            <TextField 
                id='standard-required'  
                varient='standard' 
                label='Course Code' 
            />

            <DialogActions>
                <Button>
                    Join
                </Button>
            </DialogActions>

        </div>
    );
}

export default JoinClass;