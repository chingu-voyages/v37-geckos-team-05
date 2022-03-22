import React from 'react'

export default function Header() {
    // // hamburger
    // const toggleBtn = document.querySelector('.hamburger')
    // const bars = document.querySelector('.bar')
    // const navbar = document.querySelector('.navbar')


    // toggleBtn.addEventListener('click', function () {
    //     bars.classList.toggle('toggled')
    //     navbar.classList.toggle('show-nav')
    // })

    // fixed header toggle
    // const showAnim = gsap
    //     .from(".sticky", {
    //         yPercent: -100,
    //         paused: true,
    //         duration: 0.2
    //     })
    //     .progress(1);

    // ScrollTrigger.create({
    //     start: "top top",
    //     end: 99999,
    //     onUpdate: (self) => {
    //         self.direction === -1 ? showAnim.play() : showAnim.reverse();
    //     }
    // });


    // //ticker

    // gsap.set('.ticker-wrapper', { xPercent: -50 })
    // const boxWidth = '540',
    //     totalWidth = boxWidth * 5,  //  * n of boxes
    //     ticker = document.querySelectorAll("#ticker .box"),
    //     dirFromLeft = "+=" + totalWidth,
    //     dirFromRight = "-=" + totalWidth;

    // const mod = gsap.utils.wrap(0, totalWidth);

    // function marquee(which, time, direction) {
    //     gsap.set(which, {
    //         x: function (i) {
    //             return i * boxWidth;
    //         }
    //     });
    //     const action = gsap.timeline()
    //         .to(which, {
    //             x: direction,
    //             modifiers: {
    //                 x: x => mod(parseFloat(x)) + "px"
    //             },
    //             duration: time, ease: 'none',
    //             repeat: -1,
    //         });
    //     return action
    // }

    // const master = gsap.timeline()
    //     .add(marquee(ticker, 20, dirFromLeft), 1)
    return (
        // navbar
        <header className="sticky">
            <nav>
                <a className="logo" href="#"><img src="../image/logo.png" alt="xPossible Logo" /></a>
                <div className="menu">
                    <div className="hamburger">
                        <div className="bar" />
                    </div>
                    <ul className="navbar">
                        <li className="home"><a href="#home">home</a></li>
                        <li className="showcase"><a href="#showcases">showcase</a></li>
                        <li className="team"><a href="#teams">team</a></li>
                        <li className="service"><a href="#">how it works</a></li>
                        <li className="contact"><a href="#">contact</a></li>
                    </ul>
                </div>
            </nav>
            {/* ticker */}
            <div id="ticker" className="ticker-wrapper">
                <div className="boxes">
                    <div className="box">
                        Branding · UI / UX · Strategy · Web Development · Marketing ·
                        Artist’s agency ·
                    </div>
                    <div className="box">
                        Branding · UI / UX · Strategy · Web Development · Marketing ·
                        Artist’s agency ·
                    </div>
                    <div className="box">
                        Branding · UI / UX · Strategy · Web Development · Marketing ·
                        Artist’s agency ·
                    </div>
                    <div className="box">
                        Branding · UI / UX · Strategy · Web Development · Marketing ·
                        Artist’s agency ·
                    </div>
                    <div className="box">
                        Branding · UI / UX · Strategy · Web Development · Marketing ·
                        Artist’s agency ·
                    </div>
                </div>
            </div>
        </header>

    )
}
