
import React, { forwardRef } from 'react';
import Section from '../Section';
import AnimatedElement from '../AnimatedElement';

const experienceData = [
    {
        role: "Cybersecurity Intern",
        company: "DLithe Consultancy Services Pvt. Ltd. - Bangalore",
        date: "December 2024 - February 2025",
        tasks: [
            "Worked on Network Security, Vulnerability Assessment, and Penetration Testing using Kali Linux",
            "Gained hands-on experience with Firewall & UTM Configuration and Web Application Security",
            "Practiced Cyber Forensics, Threat Intelligence, and Secure Communication Protocols",
            "Conducted web monitoring and security assessments for enterprise applications"
        ]
    },
    {
        role: "Web Development Intern",
        company: "QueueTech Solutions Pvt. Ltd. - Mangalore",
        date: "April 2024 - July 2024",
        tasks: [
            "Learned and applied Full Stack Web Development using HTML, CSS, JavaScript, and PHP",
            "Developed and implemented web-based projects with seamless front-end and back-end integration",
            "Collaborated with team members to design and build functional web applications",
            "Gained practical experience in responsive design and user experience optimization"
        ]
    }
];

const ExperienceItem: React.FC<typeof experienceData[0]> = ({ role, company, date, tasks }) => (
    <AnimatedElement className="relative mb-12">
        <div className="pl-12">
            <span className="absolute left-[-8px] top-8 w-4 h-4 rounded-full bg-[#00f0ff] shadow-[0_0_20px_#00f0ff]"></span>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-[#00f0ff] text-xl font-bold mb-2">{role}</h3>
                <p className="text-[#b0b0b0] mb-2">{company}</p>
                <p className="text-[#ff00e6] text-sm mb-4">{date}</p>
                <ul className="text-[#b0b0b0] list-disc ml-5 space-y-2">
                    {tasks.map((task, index) => <li key={index}>{task}</li>)}
                </ul>
            </div>
        </div>
    </AnimatedElement>
);


const Experience = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="experience" title="Professional Experience" ref={ref}>
            <div className="relative">
                <div className="absolute left-[0] top-0 h-full w-0.5 bg-gradient-to-b from-[#00f0ff] to-[#ff00e6]"></div>
                {experienceData.map((item, index) => (
                    <ExperienceItem key={index} {...item} />
                ))}
            </div>
        </Section>
    );
});

export default Experience;
