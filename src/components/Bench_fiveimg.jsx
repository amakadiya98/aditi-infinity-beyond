

import React, { useState, useEffect, useRef } from 'react';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const duration = 2000; 
  const startTimeRef = useRef(null);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const animatedValue = Math.floor(progress * value);
      setCurrentValue(animatedValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      startTimeRef.current = null;
    };
  }, [value]);

  return (
    <span>
      {currentValue}{suffix}
    </span>
  );
};

const AlternatingImageContent = () => {
  const [isFifthSectionVisible, setIsFifthSectionVisible] = useState(false);
  const fifthSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFifthSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
      }
    );

    if (fifthSectionRef.current) {
      observer.observe(fifthSectionRef.current);
    }

    return () => {
      if (fifthSectionRef.current) {
        observer.unobserve(fifthSectionRef.current);
      }
    };
  }, []);

  const sections = [
    {
      id: 1,
      image: '/images/image1.jpg',
      imageAlign: 'left',
      content: (
        <div className="px-4 md:px-0 ml-16">
          <h2 className="text-2xl font-bold text-white mb-4 font-sans">AI-Powered Job Application System</h2>
          <p className="text-base text-white mb-4 font-bold font-sans">
            Automate your job search process and eliminate the hassle of manual applications. Our AI-powered tool applies to jobs across multiple job boards, saving you time and significantly increasing your chances of landing interviews.
          </p>
        </div>
      )
    },
    {
      id: 2,
      image: '/images/image2.jpg',
      imageAlign: 'right',
      content: (
        <div className="px-4 md:px-0">
          <h2 className="text-2xl font-bold text-white mb-4 font-sans">Core Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-white font-sans">Automated Job Applications</h3>
              <h3 className="text-white font-semibold font-sans">Real-time application status updates</h3>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white font-sans">Multi-Portal Integration</h3>
              <h3 className="text-white font-sans font-semibold">Effortless Application: Automatically submits applications to top job boards and career sites, tailored to your profile.</h3>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      image: '/images/image3.png',
      imageAlign: 'left',
      content: (
        <div className="px-4 md:px-0 ml-16">
          <h2 className="text-2xl font-bold text-white mb-4 font-sans">Simple Setup</h2>
          <ul className="list-decimal pl-6 mb-4 text-white space-y-2 font-semibold font-sans">
            <li className='font-semibold font-sans'>Upload Resumes</li>
            <li className='font-semibold font-sans'>Set Application Rules</li>
            <li className='font-semibold font-sans'>Auto-Apply</li>
            <li className='font-semibold font-sans'>Connect Portals</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      image: '/images/image4.png',
      imageAlign: 'right',
      content: (
        <div className="px-4 md:px-0">
          <h2 className="text-2xl font-bold text-white mb-4 font-sans">Boost Your Job Search</h2>
          <ol className="list-decimal pl-6 mb-4 text-white space-y-2">
            <li className='font-semibold font-sans'>Job Tracking: Real-time job tracking</li>
            <li className='font-semibold font-sans'>Job Discovery: Smart matching Algorithms</li>
            <li className='font-semibold font-sans'>Automated Question Responses: application forms</li>
            <li className='font-semibold font-sans'>Resume Scoring: Ensure resume meets ATS standards</li>
          </ol>
        </div>
      )
    },
    {
      id: 5,
      image: '/images/image5.jpg',
      imageAlign: 'left',
      content: (
        <div className="px-4 md:px-0 ml-16" ref={fifthSectionRef}>
          <div className="items-center mb-4">
            <h2 className="text-2xl font-bold text-white mb-4 font-sans">Key Benefits</h2>
            <ol className="list-decimal pl-6 mb-4 text-white space-y-2">
              <li className='font-semibold font-sans'>
                {isFifthSectionVisible ? <AnimatedNumber value={40} suffix="% " /> : '0% '}
                Reduction in Operating Costs
              </li>
              <li className='font-semibold font-sans'>
                {isFifthSectionVisible ? <AnimatedNumber value={3} suffix="x " /> : '0x '}
                Faster Time-to-Hire
              </li>
              <li className='font-semibold font-sans'>
                {isFifthSectionVisible ? <AnimatedNumber value={25} suffix="% " /> : '0% '}
                Improvement in Candidate Quality
              </li>
              <li className='font-semibold font-sans'>
                {isFifthSectionVisible ? <AnimatedNumber value={50} suffix="% " /> : '0% '}
                Increase in Recruiter Productivity
              </li>
            </ol>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="py-16 bg-[#1A1A1D]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl mb-12">
          Our Features
        </h2>

        <div className="space-y-14">
          {sections.map((section) => (
            <div 
              key={section.id}
              className={`flex flex-col ${
                section.imageAlign === 'right' 
                  ? 'md:flex-row' 
                  : 'md:flex-row-reverse'
              } items-center ${
                section.id === 3 || section.id === 5 ? 'md:gap-4' : 'md:gap-6'
              }`}
            >
              <div className={`w-full ${
                section.id === 3 || section.id === 4 ? 'md:w-[58%]' : 'md:w-1/2'
              }`}>
                <div className={`mx-auto flex ${
                  section.id === 3 || section.id === 4 
                    ? 'max-w-[34rem] h-96' 
                    : 'max-w-md h-80'
                }`}>
                  <img 
                    src={section.image}
                    alt={`Section ${section.id}`}
                    className="w-full h-full object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>

              <div className={`w-full ${
                section.id === 3 || section.id === 4 ? 'md:w-[42%]' : 'md:w-1/2'
              } px-4 md:px-0`}>
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlternatingImageContent;