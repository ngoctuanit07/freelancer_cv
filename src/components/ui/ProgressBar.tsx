import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  name: string;
  percentage: number;
  type?: 'linear' | 'circular';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage, type = 'linear' }) => {
  if (type === 'circular') {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle cx="48" cy="48" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-700" />
            <motion.circle 
              cx="48" cy="48" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" 
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              whileInView={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-primary"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
            {percentage}%
          </div>
        </div>
        <span className="text-sm font-medium">{name}</span>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
