import React from 'react';
import { TextField, DialogActions } from '@matierial-ui/core';
import { Button } from 'react-bootstrap';

const joinClass = () => {




    return (

        <div>

            <p>
                Enter your course code to join a class:
            </p>

            <TextField label='Course Code' />

            <DialogActions>
                <Button>
                    Join
                </Button>
            </DialogActions>

        </div>
    );
}

export default joinClass;