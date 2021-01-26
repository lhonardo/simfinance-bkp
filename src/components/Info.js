import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const Info = (props) => (
    <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: '100%', padding: '5%' }}
    >
        <Paper style={{ padding: 20, height: '80%' }} className="grid-aligned">
            <Typography variant="display2" gutterBottom style={{ padding: 15 }}>
                Informação:
            </Typography>

            <img alt={props.content.title} src={props.content.icon} />

            <Typography variant="title">{props.content.name}</Typography>

            <Typography variant="subheading">
                {props.content.description}
            </Typography>

            <Divider />

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

export default Info;
