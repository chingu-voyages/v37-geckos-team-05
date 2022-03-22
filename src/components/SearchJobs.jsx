import React from 'react'
import { useEffect, useState } from 'react'
import JobCard from './JobCard'


const API_URL = `https://remotive.io/api/remote-jobs`

const SearchJobs = () => {
    const [searchJobs, setJobs] = useState([])
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
        <div className="search">
            <h1>SearchJob</h1>

            <div className="search">
                <input type="text"
                    placeholder="Search for jobs"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <button
                    onClick={() => fetchJob(searchTerm)}>search</button>
            </div>

            {searchJobs.length > 0
                ? (
                    <div className="container">
                        {searchJobs.map((j) => (
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
    )
}

export default SearchJobs
