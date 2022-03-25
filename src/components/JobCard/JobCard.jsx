import React from 'react'


const JobCard = ({job}) => {
   
    // const currentVal = job.publication_date
    // const today = new Date();
    const difference = new Date().getTime() - new Date(job.publication_date).getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
 




  return (
      <a href={job.url} target="_blank" className="job-card lightup">
        <h2 className="job-title" key={job.id}>{job.title}</h2>
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
        <p className="job-date">Posted <strong>{days}</strong> days ago</p>
  
        </a>
  )
}

export default JobCard