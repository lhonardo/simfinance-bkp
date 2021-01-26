import React from 'React';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'material-ui-image';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { DEFINITIONS, infoIcon } from '../constants';
import { CurrencyFormatInput, formatCurrency } from '../utils';

export class WalletForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            walletTempValues: props.wallet,
            messageopen: false,
            messageInfo: {},
            gender: 'male',
        };
    }

    getAvailableValue = () => {
        const { getSumWallet } = this.props;

        return (
            getSumWallet(this.props.wallet) -
            getSumWallet(this.state.walletTempValues)
        );
    };

    giveSuccessMessage = (message) => {
        let newmsg = {
            message,
            key: new Date().getTime(),
        };

        this.setState({
            messageopen: true,
            messageInfo: newmsg,
        });
    };

    onSubmit = () => {
        this.props.changeWallet(this.state.walletTempValues);
        this.giveSuccessMessage('Carteira Alterada');
        this.props.closeModal();
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ messageopen: false });
    };

    handleInputChange = (event, field) => {
        this.setState({
            walletTempValues: {
                ...this.state.walletTempValues,
                [field]: String(event.target.value).length
                    ? parseFloat(event.target.value)
                    : 0,
            },
        });
    };

    render() {
        const { message, key } = this.state.messageInfo;
        const availableValue = this.getAvailableValue();

        return (
            <div className='grid-aligned' style={{ height: '100%' }}>
                <Snackbar
                    key={key}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.messageopen}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Grid
                    container
                    justify="center"
                    alignContent="center"
                    style={{ height: '100%', padding: '5%' }}
                >
                    <Paper
                        className="contact-page-paper"
                        style={{ width: '100%', padding: 20 }}
                    >
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.props.closeModal}
                            style={{ float: 'right' }}
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="display1"
                            gutterBottom
                            style={{ padding: 15 }}
                        >
                            Carteira
                        </Typography>
                        <Typography variant="title" gutterBottom align="center">
                            Disponível para ser aplicado:{' '}
                            {formatCurrency(availableValue)}
                        </Typography>
                        <Grid container>
                            <Table aria-label="spanning table">
                                <TableBody>
                                    {Object.keys(DEFINITIONS.wallet).map((key) => {
                                        return (
                                            <TableRow key={key}>
                                                <TableCell style={{ padding: 1 }}>
                                                    <img
                                                        src={DEFINITIONS.wallet[key].icon}
                                                        width='40'
                                                    />

                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        id={key}
                                                        label={DEFINITIONS.wallet[key].name}
                                                        value={
                                                            this.state.walletTempValues[key]
                                                        }
                                                        onChange={(e) =>
                                                            this.handleInputChange(e, key)
                                                        }
                                                        required
                                                        InputProps={{
                                                            inputComponent: CurrencyFormatInput,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item xs={12}>
                            {availableValue != 0 && (
                                <div>
                                    <Typography
                                        variant="title"
                                        gutterBottom
                                        align="center"
                                        color="error"
                                    >
                                        Para salvar, valor disponível para
                                        ser aplicado deve ser 0
                                    </Typography>
                                </div>
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={12}
                            md={12}
                            style={{ marginTop: 10 }}
                        >
                            <Button
                                type="button"
                                color="primary"
                                variant="raised"
                                onClick={this.onSubmit}
                                disabled={availableValue != 0}
                            >
                                Salvar carteira
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default WalletForm;
