import React from 'react'


const JobCard = ({job}) => {
   
  return (
    <div className="jobCard">
       
        <h2 className="job-title">{job.title}</h2>
        <div className="company-wrapper">
          <p className="job-company">{job.company_name}</p>
          <img src={job.company_logo} alt="Company Logo" className="job-logo" />
        </div>
        <p className="job-location">Location: {job.candidate_required_location}</p>
        <p className="job-salary">{job.salary}</p>
        <p className="job-type">{job.job_type}</p>
        <div className="tags">
          <span className="job-tag">{job.tags[0]}</span>
          <span className="job-tag">{job.tags[1]}</span>
          <span className="job-tag">{job.tags[2]}</span>
        </div>
        <p className="job-date">posted: {job.publication_date}</p>
      
    </div>
  )
}

export default JobCard