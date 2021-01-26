import { DEFINITIONS } from '../constants';

export const login = (userName) => ({
    type: 'LOGIN',
    userName,
});

export const logout = () => ({
    type: 'LOGOUT',
});

export const changeWallet = (wallet) => ({
    type: 'CHANGE_WALLET',
    wallet
});

export const changeWorld = (world) => ({
    type: 'CHANGE_WORLD',
    world
});

export const openEndMonthInfo = (content) => ({
    type: 'OPEN_END_MONTH_INFO',
    content
});

export const closeEndMonthInfo = (showEventSummary) => ({
    type: 'CLOSE_END_MONTH_INFO',
    showEventSummary
});

export const openInfoModal = (key, name) => ({
    type: 'OPEN_INFO_MODAL',
    content: DEFINITIONS[key][name]
});

export const closeInfoModal = () => ({
    type: 'CLOSE_INFO_MODAL'
});

export const openGettingStarted = () => ({
    type: 'OPEN_GETTING_STARTED'
});

export const closeGettingStarted = () => ({
    type: 'CLOSE_GETTING_STARTED'
});

export const openEndSimulationSummary = () => ({
    type: 'OPEN_END_SIMULATION_SUMMARY'
});

export const closeEndSimulationSummary = () => ({
    type: 'CLOSE_END_SIMULATION_SUMMARY'
});
