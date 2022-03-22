import React from 'react'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import SearchJobs from './components/SearchJob/SearchJobs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/searchjobs' element={<SearchJobs />} />
                </Routes>
            </div>
        </Router>

    )
}

export default App