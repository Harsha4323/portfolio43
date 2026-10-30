
import React, { forwardRef } from 'react';
import Section from '../Section';
import AnimatedElement from '../AnimatedElement';

const educationData = [
    {
        icon: "fas fa-graduation-cap",
        degree: "Master of Computer Applications (MCA)",
        institution: "MITE - Mangalore Institute of Technology and Engineering, Moodbidri",
        date: "February 2024 - October 2025",
        score: "CGPA: 7.9/10"
    },
    {
        icon: "fas fa-user-graduate",
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Sharada Degree College, Mangalore",
        date: "June 2020 - August 2023",
        score: "CGPA: 8.03/10"
    },
    {
        icon: "fas fa-book",
        degree: "Pre University Course (PUC)",
        institution: "SDM PU College, Ujire",
        date: "June 2018 - March 2020",
        score: "Percentage: 77.5%"
    },
    {
        icon: "fas fa-school",
        degree: "SSLC - KSEEB Board",
        institution: "Government Junior College, Kalasa",
        date: "June 2017 - April 2018",
        score: "Percentage: 86.72%"
    }
];

const EducationCard: React.FC<typeof educationData[0]> = ({ icon, degree, institution, date, score }) => (
    <AnimatedElement>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] rounded-2xl flex-shrink-0 flex items-center justify-center text-4xl">
                <i className={icon}></i>
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-[#00f0ff] text-xl font-bold mb-2">{degree}</h3>
                <p className="text-white mb-1">{institution}</p>
                <p className="text-[#b0b0b0] text-sm">{date}</p>
                <p className="text-[#ff00e6] font-semibold mt-2">{score}</p>
            </div>
        </div>
    </AnimatedElement>
);


const Education = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="education" title="Education" ref={ref}>
            <div className="grid gap-8">
                {educationData.map((item, index) => (
                    <EducationCard key={index} {...item} />
                ))}
            </div>
        </Section>
    );
});

export default Education;
