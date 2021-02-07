import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import HariBesar from './haribesar';
import Gallery from './gallery';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/haribesar" component={HariBesar} />
        <Route path="/gallery" component={Gallery} />
    </Switch>
)

export default Utama;