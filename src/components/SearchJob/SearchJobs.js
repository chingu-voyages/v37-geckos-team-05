import React from 'react'
import { useEffect, useState } from 'react'
import JobCard from '../JobCard/JobCard'


const API_URL = `https://remotive.io/api/remote-jobs`

const SearchJobs = () => {
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
        <div className="search-job">
            <h1>Search Jobs</h1>
            <div className="search">
                <input type="text"
                    className="text-box"
                    placeholder="Search for jobs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button
                    className="btn"
                    onClick={() => fetchJob(searchTerm)}>Find Jobs</button>
            </div>
            <div className="job-list">

                {jobs.length > 0
                    ? (
                        <div className="container">
                            {jobs.map((j) => (
                                <JobCard job={j} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No jobs found</h2>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default SearchJobs
