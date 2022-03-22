import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './index.scss';
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Signin from './components/Signin/Signin';
import SearchJobs from './components/SearchJob/SearchJobs';
// import App from './App.js';


ReactDOM.render(
  // <>
  //   <Header />
  //   <div>hi</div>
  // </>

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

