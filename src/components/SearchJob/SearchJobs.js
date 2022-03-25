import React from 'react'
import JobCard from '../JobCard/JobCard'
import { useEffect, useState } from 'react'
import { Filter } from './Filter/Filter'


const API_URL = `https://remotive.io/api/remote-jobs`

const SearchJobs = () => {
    const [jobs, setJobs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState([])
    const [activeCategory, setActiveCategory] = useState('')

    const fetchJob = async (title) => {
        const response = await fetch(`${API_URL}?search=${title}`)
        const data = await response.json();
        setJobs(data.jobs);
        console.log(data.jobs);
        setFilter(data.jobs);
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
            <Filter
                jobs={jobs}
                setFilter={setFilter}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />

            <section className="job-list">
                {filter.length > 0
                    ? (
                        <div className="container">
                            {filter.map((job) => (
                                <JobCard job={job} />
                            ))}
                        </div>

                    ) : (
                        <div className="result">
                            {/* <h2>0 job found</h2> */}
                        </div>
                    )
                }

                {filter.length > 1
                    ? (
                        <h3 className="result">{filter.length} jobs found</h3>
                    ) : (
                        <h3 className="result">{filter.length} job found</h3>
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
