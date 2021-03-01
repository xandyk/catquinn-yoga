import React from 'react'

import Profile from '../images/profile.png'

const About = () => {
    return (
        <header className="header">
            <div className="header__avatar-box">
                <img
                    id="about"
                    className="header__avatar"
                    src={Profile}
                    alt="avatar"
                />
            </div>

            <div className="header__avatar-textbox">
                <h1 className="text-center ">About Cat</h1>
                <p className="header__paragraph">
                    Cat has been practicing yoga for most her life and is a
                    Canadian Yoga Alliance Certified RYT500 who has just
                    completed her 300 hour Hatha Vinyasa teacher training this
                    summer of 2020 with Rebekka Walker.
                </p>
                <p className="header__paragraph">
                    Cat has always searched for the full range of life’s
                    experiences, which took her down some difficult paths into
                    addiction and depression, but also on amazing trips to many
                    countries, and to the path of yoga. She began a daily
                    practice seven years ago when she quit drinking to pursue a
                    holistic lifestyle and a deep search within. Lately, she has
                    been interested in the spiritual side of yoga, studying the
                    spiritual texts and delving into a daily meditation
                    practice.
                </p>
                <p className="header__paragraph">
                    Cat believes that yoga and mindfulness practices can help
                    with many issues that we are facing today, from anxiety and
                    depression to finding greater meaning in life by creating
                    connection with our inner world and community with others.
                </p>
                <p className="header__paragraph">
                    Her classes are upbeat and playful, with dynamic movement
                    and a focus on proper alignment that welcomes all people no
                    matter their experience level; yoga is for EVERY body!
                </p>
                <p className="header__paragraph-last">
                    Cat is from Vancouver and has been living on Bowen Island
                    for two and a half years. She loves nature and is truly
                    humbled by the beauty and healing power it has. If she’s not
                    practicing yoga, you can usually find her hiking in the
                    trails with her dog, swimming in the ocean, or reading a
                    book at home with her cat.
                </p>
            </div>
        </header>
    )
}

export default About
