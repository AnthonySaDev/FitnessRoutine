import React from 'react';

interface DayOfJobProps {
  day: number;
  isToday: boolean;
}

const DayOfJob: React.FC<DayOfJobProps> = ({ day, isToday }) => {
  const workSchedules = [
    '18h-24h', '18h-24h', '18h-24h', '18h-24h', 'Folga',
    '12h-18h', '12h-18h', '12h-18h', '12h-18h', 'Folga',
    '6h-12h', '6h-12h', '6h-12h', '6h-12h', 'Folga',
    '24h-6h', '24h-6h', '24h-6h', '24h-6h', 'Folga'
  ];

  let workSchedule = workSchedules[(day - 1) % workSchedules.length];

  return (
    <div className={`p-10 text-center line-clamp-1 grid place-items-center text-3xl cursor-pointer ${isToday ? 'bg-[#533ee2]' : 'bg-[#29116b]'}`}>
      <div>{day}</div>
      <div>{workSchedule}</div>
    </div>
  );
}

export default DayOfJob;
