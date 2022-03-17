import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './index.scss';
// import App from './App';
import Landing from './componets/Landing';
import Signin from './componets/Signin';
import SearchJobs from './componets/SearchJobs';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signin' element={<Signin />} />
      {/* <Route path='/search' element={<App />} /> */}
      <Route path='/search' element={<SearchJobs />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

