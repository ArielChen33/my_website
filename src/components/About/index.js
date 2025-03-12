import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        const timeoutId =  setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 3000);

        return () => clearTimeout(timeoutId); //cleanup function
    }, [])

    return (
    <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray={['A', "b", 'o', 'u', 't', '', 'm', 'e']}
                        idx={15}/>
                </h1>
                <p>
                I am a passionate full-stack developer with expertise in JavaScript, 
                React, Python, and databases. I enjoy solving complex problems, 
                optimizing performance, and building scalable applications. 
                Writing clean, efficient code is important to me, and I continuously 
                seek ways to improve both my technical skills and development processes.
                </p>
                <p align="LEFT">
                My curiosity and adaptability drive me to quickly learn new technologies 
                and stay ahead of industry trends. I thrive in collaborative environments, 
                where I can exchange ideas, refine solutions, and contribute to impactful projects. 
                With a strong problem-solving mindset, I am always eager to take on new challenges 
                and make meaningful contributions to any team.
                </p>
                
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
    </>
        
    )
}


export default About