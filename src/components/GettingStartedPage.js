import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ALL_EVENTS } from '../data/events';

const GettingStarted = (props) => (
    <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: '100%', padding: '5%' }}
    >
        <Paper style={{ padding: 20, height: '80%' }} className="grid-aligned">
            <Typography variant="display2" gutterBottom style={{ padding: 15 }}>
                Olá!
            </Typography>
            <Typography variant="title" gutterBottom style={{ padding: 15 }}>
                Antes de começar
            </Typography>

            <Grid item xs={12} style={{ marginTop: 10, textAlign: 'center' }}>
                <Button
                    type="button"
                    color="primary"
                    variant="raised"
                    onClick={props.close}
                >
                    Fechar
                </Button>
            </Grid>
        </Paper>
    </Grid>
);

export default GettingStarted;
