import React, { useState } from 'react'
import Header from './Header'

const SearchJobs = () => {
    const [query, setQuery] = useState('');
    const searchJobs = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const query = "developer";

        const url = `https://www.themuse.com/api/public/jobs?page=3`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="search-job" >
            <Header />
            <form className='form' onSubmit={searchJobs}>
                <label htmlFor="query" className="label ">Job Name</label>
                <input htmlFor="text" className="input" name="query" placeholder="i.e Front end developer" value={query} onChange={(e) => { setQuery(e.target.value) }} />
                <button className="button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchJobs