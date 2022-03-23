import React from 'react'
import JobCard from '../JobCard/JobCard'
import JobDetail from '../JobDetail/JobDetail'
import { useEffect, useState } from 'react'


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

            {/* search bar */}
            <div className="search">
                <input type="text"
                    className="text-box"
                    placeholder="Search for jobs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button
                    className="btn lightup"
                    onClick={() => fetchJob(searchTerm)}>Find Jobs</button>
            </div>

            {/* <div className="jobs-containter"> */}
            <section className="job-list">

                {jobs.length > 0
                    ? (
                        <div className="container">
                            {jobs.map((job) => (
                                <JobCard job={job} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No jobs found</h2>
                        </div>
                    )
                }

            </section>

            {/* <section className="job-details">
                <JobDetail />
            </section> */}
            {/* </div> */}
        </div>
    )
}

export default SearchJobs
