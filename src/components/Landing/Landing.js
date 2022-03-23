import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing">
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
                        <Link to={"/signin"}
                            className="overlay__btn overlay__btn--transparent">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing