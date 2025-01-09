import React, { useState } from 'react';
import './FAQ.css'; // Optional: For custom styles
import './Home.css'
import Navbar from './Navbar';
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        
            {
                "question": "What is the purpose of the website?",
                "answer": "The website is designed to provide easy access to digital copies of historical manuscripts and comprehensive information about various dynasties."
            },
            {
                "question": "Who can use this platform?",
                "answer": "The platform is intended for researchers, historians, scholars, students, and anyone interested in exploring historical manuscripts and dynastic history."
            },
            {
                "question": "How can I search for a manuscript?",
                "answer": "You can search for manuscripts by entering the name of a dynasty in the search bar. The platform will display relevant manuscripts and related information."
            },
            {
                "question": "What type of information is available about each dynasty?",
                "answer": "The platform provides details such as historical context, cultural significance, major events, and key figures associated with each dynasty."
            },
            {
                "question": "Are the manuscripts available in their original format?",
                "answer": "Yes, the manuscripts are digitized as high-quality images to preserve their original format and authenticity."
            },
            {
                "question": "Can I download the manuscripts?",
                "answer": "Currently, the platform allows viewing manuscripts online, but downloading may be subject to copyright or preservation policies."
            },
            {
                "question": "Is there a cost associated with using the website?",
                "answer": "The website is free to use for accessing manuscripts and dynasty information. Any future updates on pricing or subscriptions will be clearly communicated."
            },
            {
                "question": "How accurate is the information provided about the dynasties?",
                "answer": "The information is curated from reliable historical sources and verified by experts to ensure accuracy."
            },
            {
                "question": "Can users contribute manuscripts or information?",
                "answer": "Currently, contributions are not enabled, but future updates may include options for collaboration with scholars and institutions."
            },
            {
                "question": "How are the manuscripts categorized?",
                "answer": "The manuscripts are categorized by dynasties, making it easy to locate relevant materials based on historical periods or regions."
            },
            {
                "question": "Is the website mobile-friendly?",
                "answer": "Yes, the website is fully responsive and optimized for use on various devices, including smartphones and tablets."
            },
            {
                "question": "What measures are taken to preserve manuscript quality?",
                "answer": "Manuscripts are digitized using advanced imaging technologies to ensure high-quality preservation and clarity."
            },
            {
                "question": "Does the website include manuscripts from all Indian dynasties?",
                "answer": "The website currently features manuscripts from over 15 dynasties, with plans to expand the collection in the future."
            },
            {
                "question": "Can I provide feedback or report issues with the platform?",
                "answer": "Yes, users can provide feedback or report issues through the contact or support section of the website."
            },
            {
                "question": "How is this platform different from other digital archives?",
                "answer": "Unlike traditional archives, this platform offers enhanced discoverability, an intuitive user interface, and additional contextual information to enrich the user experience."
            }
        
        
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        
        <div className="completeCover">
            <Navbar/>
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {faq.question}
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default FAQ;

// Example CSS (FAQ.css)
/*
.faq-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.faq-list {
    margin-top: 20px;
}

.faq-item {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.faq-item:hover {
    background-color: #f9f9f9;
}

.faq-item.active {
    background-color: #eef;
}

.faq-question {
    font-weight: bold;
}

.faq-answer {
    margin-top: 10px;
    color: #555;
}
*/
