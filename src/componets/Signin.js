import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Signin = () => {
    return (
        <div className="signin">
            <Header />
            {/* <canvas className="orb-canvas" /> */}
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login">
                        <span className="text-gradient">Login Form</span>
                    </div>
                    <div className="title signup">
                        <span className="text-gradient">Sign Up</span>
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" defaultChecked />
                        <input type="radio" name="slide" id="signup" />
                        <label htmlFor="login" className="slide login">Login</label>
                        <label htmlFor="signup" className="slide signup">Signup</label>
                        <div className="slider-tab" />
                    </div>
                    <div className="form-inner">
                        <form action="#" className="login">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="pass-link">
                                <a href="#">Forgot password?</a>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer" />
                                <input type="submit" defaultValue="Login" />
                            </div>
                            <div className="signup-link">
                                Not a member? <a href>Signup now</a>
                            </div>
                        </form>
                        <form action="#" className="signup">
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer" />
                                <input type="submit" defaultValue="Signup" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signin