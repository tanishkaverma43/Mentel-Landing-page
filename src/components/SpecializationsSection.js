import React from 'react';

const SpecializationsSection = () => {
  const specializations = [
    'Life Transitions',
    'Depression Care',
    'Cognitive Behavioral',
    'PTSD',
    'Anxiety Treatment',
    'Trauma Therapy',
    'Relationship Issues',
    'Stress Management'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8" style={{ borderRadius: '12px', maxWidth: '90%' }}>
      <h3 className="text-xl font-bold mb-4" style={{ color: '#333333' }}>Specializations</h3>
      <div className="flex flex-wrap gap-3">
        {specializations.map((spec, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: '#e8f0fe',
              color: '#3f80ff',
              borderRadius: '9999px',
              display: 'inline-block'
            }}
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SpecializationsSection;
