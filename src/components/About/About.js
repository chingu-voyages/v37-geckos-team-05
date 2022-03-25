import React from 'react'

function About() {
    return (
        <div className="about-container">
            <h2 className="text-gradient">Our Mission</h2>
            <p>To help people everywhere find a job and company they love.</p>
            <h2 className="text-gradient">About us</h2>
            <p>We are a 6-week remote developer team. </p>
            <p>This project is created for the <a style={{ display: 'inline', fontWeight: "bold" }} href="https://www.chingu.io/" target="_blank">Chingu</a> Voyage 37.</p>
            <p><a style={{ display: 'inline', fontWeight: "bold" }} href="https://github.com/chingu-voyages/v37-geckos-team-05" t>SOURCE CODE</a></p>
            <h2 className="text-gradient">Find Us on GitHub</h2>
            <div className="github-container">
                <a className="profile"
                    href="https://github.com/ai-jian"
                    target="_blank">
                    <div className="img">A</div>
                    <div className="name">Ai Jian</div>
                    <div className="title">Developer / Designer</div>
                </a>
                <a className="profile"
                    href="https://github.com/anianeal"
                    target="_blank">
                    <div className="img">A</div>
                    <div className="name">Ania</div>
                    <div className="title">Developer / Designer</div>
                </a>
                <a className="profile"
                    href="#"
                    target="_blank">
                    <div className="img">A</div>
                    <div className="name">Ainne</div>
                    <div className="title">Product Owner</div>
                </a>
            </div>

        </div >
    )
}

export default About