import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './gears';
import './styles/index.css';
import './assets/fonts/golostext/golostext.css';
import {options} from "./styles/mui_theme";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {routers} from "./routers/routers";
import {Context} from './context';
import Store from "./stores/Store";

const store = new Store();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createTheme(options);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Context.Provider value={{store}}>
                <App routers={routers()}/>
            </Context.Provider>
        </ThemeProvider>
    </React.StrictMode>
);