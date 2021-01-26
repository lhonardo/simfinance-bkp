import React from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import WalletForm from './WalletForm';
import { DEFINITIONS, infoIcon} from '../constants';
import { changeWallet, openInfoModal } from '../store/actions';
import * as utils from '../utils';

// Pass fusioncharts as a dependency of charts
ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class Wallet extends React.Component {
    state = {
        editing: false
    }
    
    getSumWallet = (wallet) => {
        return Object.keys(wallet)
            .map((key) => wallet[key])
            .reduce((sum, i) => sum + i, 0);
    }

    closeModal = () => {
        this.setState({editing: false})
    }
    
    render() {
        const total = this.getSumWallet(this.props.wallet);
        const pieChartConfig = {
            type: 'Pie2d',
            width: '100%',
            height: '400',
            dataFormat: 'JSON',
            dataSource: {
                chart: {
                    caption: 'Sua carteira atual',
                    subCaption : 'Por tipo de investimento',
                    numberprefix: '$',
                    animation: '1',
                    decimals: '1',
                    theme: 'fusion',
                    showPercentInTooltip: '0',
                    showLabels: false,
                },
                data: Object.keys(DEFINITIONS.wallet).map((key) => {
                    return {
                        label: DEFINITIONS.wallet[key].name,
                        value: this.props.wallet[key],
                        issliced: '0',
                    };
                }),
            },
        };
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <ReactFC {...pieChartConfig} />
                    </Grid>
                    <Grid item xs={12}>
                        <Table aria-label="spanning table">
                            <TableBody>
                                {Object.keys(DEFINITIONS.wallet).map((key) => (
                                    <TableRow key={key}>
                                        <TableCell style={{padding:1}}>
                                            <img
                                                width="30"
                                                alt={
                                                    DEFINITIONS.wallet[key].name
                                                }
                                                src={
                                                    DEFINITIONS.wallet[key].icon
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {DEFINITIONS.wallet[key].name}
                                        </TableCell>
                                        <TableCell numeric>
                                            {utils.formatCurrency(this.props.wallet[key])}
                                        </TableCell>
                                        <TableCell style={{padding:1}}>
                                            <a onClick={() => this.props.openInfoModal('wallet', key)}>
                                                <img atl='Info' src={infoIcon} width="20" style={{marginLeft: 5}}/>
                                            </a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <br/>
                        <Typography align='center' variant='headline'>
                            Total: {utils.formatCurrency(total)}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: 10 }}>
                    <Button
                        type="button"
                        color="primary"
                        variant="raised"
                        size="large"
                        onClick={() => this.setState({editing: true})}
                    >
                        Ajustar minha carteira
                    </Button>
                </Grid>
                <Modal 
                    open={this.state.editing} 
                    onClose={() => {this.setState({editing: false})}}
                    onEscapeKeyDown={this.closeModal}
                >
                    <WalletForm
                        wallet={this.props.wallet}
                        changeWallet={this.props.changeWallet}
                        getSumWallet={this.getSumWallet}
                        closeModal={this.closeModal}
                        changeWallet={this.props.changeWallet}
                        openInfoModal={this.props.openInfoModal}
                    />
                </Modal>
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state) => ({
    wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
    changeWallet: (value) => dispatch(changeWallet(value)),
    openInfoModal: (key, name) => dispatch(openInfoModal(key, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
