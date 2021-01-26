import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import _ from 'lodash';

import { DEFINITIONS } from '../constants';
import { ALL_EVENTS } from '../data/events';

import { formatPercentage, formatCurrency } from '../utils';

const EndSimulationSummary = (props) => (
    <Grid
        container
        justify="center"
        alignContent="center"
        style={{ height: '100%', padding: '5%' }}
    >
        <Paper style={{ padding: 20, height: '80%' }} className="grid-aligned">
            <Typography variant="display2" style={{ padding: 15 }}>
                Fim!
            </Typography>
            <Typography variant="title" gutterBottom style={{ padding: 15 }}>
                Você completou a simulação :)
            </Typography>
            <Typography variant="body2">
                Durante o período, esse foi o resultado acumulado do mercado:
            </Typography>
            <Grid item xs={12}>
                <Table aria-label="spanning table">
                    <TableBody>
                        {Object.keys(props.world.simulationResults).map(
                            (key) => (
                                <TableRow key={key}>
                                    <TableCell style={{ padding: 1 }}>
                                        <img
                                            width="30"
                                            alt={DEFINITIONS.world[key].name}
                                            src={DEFINITIONS.world[key].icon}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {DEFINITIONS.world[key].name}
                                    </TableCell>
                                    <TableCell numeric>
                                        {formatPercentage(
                                            _.sum(
                                                props.world.simulationResults[
                                                    key
                                                ]
                                            )
                                        )}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </Grid>

            <Typography variant="title" gutterBottom>
                Sobre a sua carteira
            </Typography>
            <Grid item xs={12}>
                <Table aria-label="spanning table">
                    <TableBody>
                        <TableRow>
                            <TableCell>Inicial</TableCell>
                            <TableCell>$10.000,00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Final</TableCell>
                            <TableCell>
                                {formatCurrency(
                                    _.sum(Object.values(props.wallet))
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Variação</TableCell>
                            <TableCell>
                                {formatPercentage(
                                    parseFloat((10000 * _.sum(Object.values(props.wallet)) + 10000).toFixed(2))
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>

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

export default EndSimulationSummary;
