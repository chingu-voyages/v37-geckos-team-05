import React from 'react'
// import { useEffect, useState } from 'react'




const JobDetail = ({ job }) => {
    // const [jobs, setJobs] = useState([])
    // const [searchTerm, setSearchTerm] = useState('')


    // useEffect(() => {

    // }, [])

    return (
        <div className="job-detail">
            <div className="job-card" key={job.id}>
                <h2 className="job-title">{job.title}</h2>
                <div className="company-wrapper">
                    <img src={job.company_logo} alt="Company Logo" className="job-logo" />
                    <p className="job-company">{job.company_name}</p>
                </div>
                <p className="job-location">Location: {job.candidate_required_location}</p>

                {
                    job.salary ?
                        (<p className="job-salary">Salary: {job.salary}</p>)
                        : (<p className="job-salary">Salary: ---</p>)
                }

                {
                    job.type ?
                        (<p className="job-type">type: {job.type}</p>)
                        : (<p className="job-type">type: ---</p>)
                }

                <div className="tags">
                    <span className="job-tag">{job.tags[0]}</span>
                    <span className="job-tag">{job.tags[1]}</span>
                    <span className="job-tag">{job.tags[2]}</span>
                    <span className="job-tag">{job.tags[3]}</span>
                    <span className="job-tag">{job.tags[4]}</span>
                </div>
                {/* <p className="job-date">posted: {job.publication_date}</p> */}

            </div>
        </div >
    )
}

export default JobDetail
