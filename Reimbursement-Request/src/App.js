import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainRouter from './Routers/routers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const App = () => (
  <BrowserRouter>

    <MainRouter/>
    
  </BrowserRouter>
)

export default App;