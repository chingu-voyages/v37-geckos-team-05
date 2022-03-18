import React, { useState, useEffect } from "react";
// import useFetchJobs from "./componets/useFetchJobs";
import axios from "axios";
import Job from "./componets/Job";
import Header from "./componets/Header";



function App() {
  const [search, setSearch] = useState('')
  const [jobs, setJobs] = useState([]);

  const searchJobs = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = `https://www.themuse.com/api/public/jobs?page=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      setJobs(data.results);
    } catch (err) {
      console.error(err);
    }
  }

  // useEffect(() => {
  //   axios
  //     .get('https://www.themuse.com/api/public/jobs?page=3')
  //     .then(res => {
  //       setJobs(res.data.results);
  //     })
  //     .catch(error => console.log(error));
  // }, [])



  // const handleChange = e => {
  //   setSearch(e.target.value)
  // };

  const filteredJobs = jobs.filter(job => job.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="job-app search-job">
      <Header />
      <div className="job-search">
        <form className="form" onSubmit={searchJobs}>
          <lable className="search-text text-gradient">Search a job</lable>
          <input type="text" placeholder="i.e Front end developer" className="job-input" value={search} onChange={(e) => { setSearch(e.target.value) }} />
          {/* <input type="text" placeholder="City" className="location-input" value={location} onChange={(e) => { setSearch(e.target.value) }} /> */}
          <button className="button" type="submit">Search</button>
        </form>
      </div>
      {/* {console.log({ jobs })} */}
      {
        filteredJobs.map(job => {
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
        })
      }

    </div >
  );
}

export default App;
