import React from 'react'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';
import SearchJobs from './components/SearchJob/SearchJobs';
// import JobDetail from './components/JobDetail/JobDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'


const API_URL = `https://remotive.io/api/remote-jobs`


function App() {

    const [jobs, setJobs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const fetchJob = async (title) => {
        const response = await fetch(`${API_URL}?search=${title}`)
        const data = await response.json();
        setJobs(data.jobs);
        console.log(data.jobs);
    }

    useEffect(() => {
        fetchJob('frontend')
    }, [])

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/searchjobs' element={<SearchJobs />} />
                    {/* <Route path='/searchjobs/:id' element={<JobDetail />} /> */}
                </Routes>
            </div>
        </Router>

    )
}

export default App