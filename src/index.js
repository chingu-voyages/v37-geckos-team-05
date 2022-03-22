import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './index.scss';
// import SearchTest from './componets/SearchTest';
import Landing from './components/Landing'
import Signin from './components/Signin';
import SearchJobs from './components/SearchJobs';
import App from './App.js';


ReactDOM.render(
  // <App />,
  <Router>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signin' element={<Signin />} />

      {/* <Route path='/search' element={<SearchTest />} /> */}

      <Route path='/search' element={<SearchJobs />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

