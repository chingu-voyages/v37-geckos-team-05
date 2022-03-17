import React, { useState, useEffect } from "react";
// import useFetchJobs from "./componets/useFetchJobs";
import axios from "axios";
import Job from "./componets/Job";



function App() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://www.themuse.com/api/public/jobs?page=3')
      .then(res => {
        setJobs(res.data.results);
      })
      .catch(error => console.log(error));
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filteredJobs = jobs.filter(job => job.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="job-app">
      <div className="job-search">
        <h1 className="search-text">Search a job</h1>
        <form>
          <input type="text" placeholder="Search" className="job-input" onChange={handleChange} />
        </form>
      </div>
      {/* {console.log({ jobs })} */}
      {filteredJobs.map(job => {
        return (
          <Job
            key={job.id}
            title={job.name}
            company={job.company.name}
            location={job.locations.map(location => location.name)}
            level={job.levels[0].name}
            postDate={job.publication_date}
          />
          // <Job />
        )
      })}

    </div>
  );
}

export default App;
