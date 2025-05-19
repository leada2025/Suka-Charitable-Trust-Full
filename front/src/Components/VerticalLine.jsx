// components/VerticalLabelLine.jsx
import React from 'react';

const VerticalLabelLine = ({ title }) => {
  return (
    <div className="flex flex-col items-center mr-8">
      <div className="border-l-4 border-blue-600 h-[350px] relative">
        <div className="absolute -left-[65px] top-1/2 -translate-y-1/2 transform -rotate-90 text-blue-700 text-4xl font-bold whitespace-nowrap">
          {title}
        </div>
      </div>
    </div>
  );
};

export default VerticalLabelLine;
