import './App.css';
import React from 'react';
import AppHw from './comps/appHw';
import VipList from './comps/vipList';
import AppRoutes from './comps_routes/appRoutes';
import AppPixa from './comps_pixa/appPixa';
// import AppRoutes from './comps_routes/appRoutes';

function App() {
    return (
        <React.Fragment>
            {/* <AppRoutes /> */}
            {/* <VipList /> */}
            <AppRoutes/>
            {/* <AppPixa/> */}
        </React.Fragment>
    );
}

export default App;