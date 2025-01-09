import React from 'react';
import './Survey.css';
import Navbar2 from './Navbar2';

// Importing images
import img1 from '../photos/surveyPhotos/1.png';
import img2 from '../photos/surveyPhotos/2.png';
import img3 from '../photos/surveyPhotos/3.png';
import img4 from '../photos/surveyPhotos/4.png';
import img5 from '../photos/surveyPhotos/5.png';
import img6 from '../photos/surveyPhotos/6.png';
import img7 from '../photos/surveyPhotos/7.png';
import img8 from '../photos/surveyPhotos/8.png';
import img9 from '../photos/surveyPhotos/9.png';
import img10 from '../photos/surveyPhotos/10.png';

const ScrollDownPage = () => {
    const numberOfResponses = 60; // Example number of responses
    const emailArray = [
        "yashwanthrathi.is23@rvce.edu.in",
        "prajwalts.is23@rvce.edu.in",
        "pavanps.is23@rvce.edu.in",
        "navyaghebbar.cd24@rvce.edu.in",
        "nihaalsprakash.is23@rvce.edu.in",
        "prajwalvyshnavi4@gmail.com",
        "shrikant.cs23@rvce.edu.in",
        "hemanthhs.ch23@rvce.edu.in",
        "ayushkumarm.me24@rvce.edu.in",
        "dharshansn.is23@rvce.edu.in",
        "kumargowdad17@gmail.com",
        "ranjanar.ec23@rvce.edu.in",
        "amoghap.ai23@rvce.edu.in",
        "venups797@gmail.com",
        "ashutoshsinha.ec24@rvce.edu.in",
        "vishruthmd.is23@rvce.edu.in",
        "madhurrishis.is24@rvce.edu.in",
        "kdhruvb.ae24@rvce.edu.in",
        "radhakrishna@rvce.edu.in",
        "vnikhil.is23@rvce.edu.in",
        "omkarda.bt24@rvce.edu.in",
        "sprajan.ec23@rvce.edu.in",
        "divakarsg@rvce.edu.in",
        "pavanpspavan2@gmail.com",
        // Add other emails as needed
    ];

    const sections = [
        { headline: "Question 1", imageUrl: img1 },
        { headline: "Question 2", imageUrl: img2 },
        { headline: "Question 3", imageUrl: img3 },
        { headline: "Question 4", imageUrl: img4 },
        { headline: "Question 5", imageUrl: img5 },
        { headline: "Question 6", imageUrl: img6 },
        { headline: "Question 7", imageUrl: img7 },
        { headline: "Question 8", imageUrl: img8 },
        { headline: "Question 9", imageUrl: img9 },
        { headline: "Question 10", imageUrl: img10 }
    ];

    return (
        <div className='outDiv'>
            <Navbar2 />
            <div className="scroll-container">
                <div className="response-count">
                    <h1>No of People Responded: {numberOfResponses}</h1>
                </div>
                <div className="email-section">
                    <h2>Email IDs of Responded People</h2>
                    <div className="email-list">
                        {emailArray.map((email, index) => (
                            <div key={index} className="email-item">{email}</div>
                        ))}
                    </div>
                </div>

                <div className="sections-container">
                    {sections.map((section, index) => (
                        <div key={index} className="section">
                            <h3 className="section-headline">{section.headline}</h3>
                            <img src={section.imageUrl} alt={section.headline} className="section-image" />
                        </div>
                    ))}
                </div>

                <div className="info-container">
                    <div className="current-date">
                        <h2>Help us Conduct the survey by filling the form</h2>
                        <p style={{height:"2rem",width:"7rem",display:"flex",justifyContent:"center",alignItems:"center",textDecoration:"none",color:"black",backgroundColor:"white",borderRadius:"5px"}}><a href="https://docs.google.com/forms/d/e/1FAIpQLSfQhOmB1WD4aUGySXaK7AWh8omjLKvT4MO8f41GqLbXuFP92A/viewform?vc=0&c=0&w=1&flr=0" style={{textDecoration:"none",color:"black"}}>Fill the form</a></p>
                    </div>
                   
                    <div className="Access the GitHub">
                        <h2>Repository Link</h2>
                        <a href="" target="_blank" rel="noopener noreferrer" >Access GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollDownPage;
