import React from 'react'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import SearchJobs from './components/SearchJob/SearchJobs';
import About from './components/About/About';
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
                    <Route path='/about' element={<About />} />
                    {/* <Route path='/searchjobs/:id' element={<JobDetail />} /> */}
                </Routes>
            </div>
        </Router>

    )
}

export default App