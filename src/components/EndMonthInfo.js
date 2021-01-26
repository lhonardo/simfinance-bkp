import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { DEFINITIONS } from '../constants';
import { formatPercentage } from '../utils';

const EndMonthInfo = (props) => (
    <div
        className='grid-aligned' 
        style={{ height: '100%' }}
    >
        <Grid container>
            <Paper style={{ padding: 20 }} className="grid-aligned">
                <Typography variant="headline" gutterBottom style={{ padding: 15 }}>
                    Resumo do mês
                </Typography>

                <img alt={props.content.title} src={props.content.icon} />

                <Typography variant="title">{props.content.title}</Typography>

                <Typography variant="subheading">
                    {props.content.description}
                </Typography>

                <br />

                <Typography variant="title">Variações:</Typography>

                <br />

                <Table aria-label="spanning table">
                    <TableBody>
                        {[
                            'inflation',
                            'interestRate',
                            'rareMaterial',
                            'stockMarketPoints',
                        ].map((key) => {
                            const value = props.content[key];
                            return (
                                <TableRow key={key}>
                                    <TableCell style={{ padding: 1 }}>
                                        <img
                                            width="30"
                                            style={{ marginRight: 10 }}
                                            alt={DEFINITIONS.world[key].name}
                                            src={DEFINITIONS.world[key].icon}
                                        />
                                    </TableCell>
                                    <TableCell>{DEFINITIONS.world[key].name}:</TableCell>
                                    <TableCell
                                        numeric
                                        style={
                                            value != 0
                                                ? { color: value > 0 ? 'green' : 'red' }
                                                : {}
                                        }
                                    >
                                        {value > 0 && '+'}
                                        {formatPercentage(value)}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                

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
    </div>
);

export default EndMonthInfo;
