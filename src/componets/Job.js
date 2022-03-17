import React from 'react'

const Job = ({ title, company, location, level, postDate }) => {
    return (
        <div className='job-container'>
            <div className="job-row">
                <div className="job">
                    <h4>{title}</h4>
                    <p className="company">{company}</p>
                    <p className="location">{location}</p>
                    <p className="level">{level}</p>
                    <p className="postDate">Posted on: {postDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Job