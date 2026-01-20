import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8" style={{ borderRadius: '12px', width: '101%' }}>
      <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>About</h3>
      <div className="space-y-4">
        <p className="leading-relaxed text-sm lg:text-base" style={{ color: '#666666' }}>
          Dr. Sam Walkfolk is a licensed Clinical Psychologist with over 10 years of experience in mental health care. He specializes in treating anxiety disorders, depression, trauma, and relationship issues using evidence-based therapeutic approaches.
        </p>
        <p className="leading-relaxed text-sm lg:text-base" style={{ color: '#666666' }}>
          Dr. Walkfolk earned his Doctorate in Clinical Psychology from Columbia University and completed his residency at New York Presbyterian Hospital. He is committed to providing compassionate, personalized care to help clients achieve their mental health goals.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
