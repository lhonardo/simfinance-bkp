import React from 'react';
import { render } from 'react-dom';
import { throttle } from 'lodash';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';
import { theme } from './theme/theme';
import configureStore from './store/configureStore';

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
};

const store = configureStore();

store.subscribe(
    throttle(() => {
        saveState(store.getState());
    }, 1000)
);

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <AppRouter />
        </MuiThemeProvider>
    </Provider>
);

render(<App />, document.getElementById('app'));
