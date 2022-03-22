import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Landing = () => {
    return (
        <div className="landing">

            <Header />
            {/* Canvas */}
            {/* <canvas className="orb-canvas" /> */}
            {/* Overlay */}
            <div className="overlay">
                {/* Overlay inner wrapper */}
                <div className="overlay__inner">
                    {/* Title */}
                    <h1 className="overlay__title">
                        Congrats on taking the steps to start your new
                        <span className="text-gradient"> career</span>
                    </h1>
                    <p className="overlay__description">
                        You will be able to apply and filter job to suit your needs.
                        <strong> You'll even be able to save them to comeback later</strong>
                    </p>
                    {/* Buttons */}
                    <div className="overlay__btns">
                        <button className="overlay__btn overlay__btn--transparent">
                            <Link to={"/signin"}>Signup</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing