import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Dashboard from './pages/Dashboard';
import List from './pages/List';
import dark from './styles/themes/dark';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <List/>
            </Layout>
        </ThemeProvider>
    );
}
export default App;