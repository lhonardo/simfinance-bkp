const INITIAL_STATE = {
    auth: {
        userName: '',
    },
    world: {
        year: 1,
        month: 0,
        name: '',
        inflation: 0.0056,
        interestRate: 0.0056,
        stockMarketPoints: 50000,
        rareMaterial: 10000,
        eventsOccurred: [],
        activeEvent: null,
        activeEventMonth: 1,
        showEventSummary: false,
        simulationResults: {
            inflation: [],
            interestRate: [],
            stockMarketPoints: [],
            rareMaterial: []
        }
    },
    wallet: {
        account: 0,
        stockMarket: 4000,
        publicTreasure: 3000,
        rareMaterial: 3000,
    },
    showEndMonthInfo: false,
    endMonthInfoContent: {},
    showInfoModal: false,
    infoModalContent: {},
    showGettingStarted: true,
    showEndSimulationSummary: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                auth: {
                    userName: action.userName,
                },
            };

        case 'LOGOUT':
            return INITIAL_STATE;

        case 'CHANGE_WORLD':
            return {
                ...state,
                world: { ...action.world},
            };

        case 'CHANGE_WALLET':
            return {
                ...state,
                wallet: { ...action.wallet}
            };

        case 'OPEN_END_MONTH_INFO':
            return {
                ...state,
                showEndMonthInfo: true,
                endMonthInfoContent: action.content
            }
        
        case 'CLOSE_END_MONTH_INFO':
            return {
                ...state,
                showEndMonthInfo: action.showEventSummary,
                showEventSummary: action.showEventSummary
            }

        case 'OPEN_INFO_MODAL':
            return {
                ...state,
                showInfoModal: true,
                infoModalContent: action.content
            }
        
        case 'CLOSE_INFO_MODAL':
            return {
                ...state,
                showInfoModal: false
            }
        
        case 'OPEN_GETTING_STARTED':
            return {
                ...state,
                showGettingStarted: true
            }
        
        case 'CLOSE_GETTING_STARTED':
            return {
                ...state,
                showGettingStarted: false
            }
        
        case 'OPEN_END_SIMULATION_SUMMARY':
            return {
                ...state,
                showEndSimulationSummary: true
            }
        
        case 'CLOSE_END_SIMULATION_SUMMARY':
            return {
                ...state,
                showEndSimulationSummary: false
            }

        default:
            return state;
    }
};
