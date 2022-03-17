import React from 'react'
import Header from './Header'

const SearchJobs = () => {
    return (
        <>
            <Header />
            <form className='form'>
                <label htmlFor="query" className="label">Job Name</label>
                <input htmlFor="text" className="input" name="query" placeholder="i.e Front end developer" />
                <button className="button" type="submit">Search</button>
            </form>
        </>
    )
}

export default SearchJobs