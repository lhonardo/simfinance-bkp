import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import DialogContent from '@material-ui/core/DialogContent';

import Wallet from './Wallet';
import World from './World';
import EndMonthInfo from './EndMonthInfo';
import EndEventSummary from './EndEventSummary';
import GettingStartedPage from './GettingStartedPage';
import EndSimulationSummary from './EndSimulationSummary';
import Info from './Info';

import {
    closeEndMonthInfo,
    closeInfoModal,
    closeGettingStarted,
    closeEndSimulationSummary,
} from '../store/actions';

const HomePage = (props) => (
    <React.Fragment>
        <Grid container>
            <Grid item xs={12} style={{ marginTop: 10 }}>
                <Paper className="homepagepaper">
                    <Wallet />
                </Paper>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 10 }}>
                <Paper className="homepagepaper">
                    <World />
                </Paper>
            </Grid>
        </Grid>
        <Modal open={props.showEndMonthInfo}>
            <DialogContent>
                {props.showEventSummary ? (
                    <EndEventSummary
                        close={() => props.closeModal(false)}
                        event={props.world.activeEvent}
                    />
                ) : (
                    <EndMonthInfo
                        close={() =>
                            props.closeModal(props.world.activeEventMonth == 99)
                        }
                        content={props.endMonthInfoContent}
                    />
                )}
            </DialogContent>
        </Modal>
        <Modal open={props.showInfoModal}>
            <DialogContent>
                {props.showInfoModal ? (
                    <Info
                        close={props.closeInfoModal}
                        content={props.infoModalContent}
                    />
                ) : (
                    <div />
                )}
            </DialogContent>
        </Modal>
        <Modal open={props.showGettingStarted}>
            <DialogContent>
                <GettingStartedPage close={props.closeGettingStarted} />
            </DialogContent>
        </Modal>
        <Modal open={props.showEndSimulationSummary}>
            <DialogContent>
                <EndSimulationSummary
                    wallet={props.wallet}
                    world={props.world}
                    close={props.closeEndSimulationSummary} 
                />
            </DialogContent>
        </Modal>
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    showEndMonthInfo: state.showEndMonthInfo,
    endMonthInfoContent: state.endMonthInfoContent,
    showEventSummary: state.showEventSummary,
    world: state.world,
    wallet: state.wallet,
    showInfoModal: state.showInfoModal,
    infoModalContent: state.infoModalContent,
    showGettingStarted: state.showGettingStarted,
    showEndSimulationSummary: state.showEndSimulationSummary,
});

const mapDispatchToProps = (dispatch) => ({
    closeModal: (showEventSummary = false) =>
        dispatch(closeEndMonthInfo(showEventSummary)),
    closeInfoModal: () => dispatch(closeInfoModal()),
    closeGettingStarted: () => dispatch(closeGettingStarted()),
    closeEndSimulationSummary: () => dispatch(closeEndSimulationSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
