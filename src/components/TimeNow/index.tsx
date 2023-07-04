'use client'
import React, {useState, useEffect} from 'react';

const TimeNow: React.FC = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
          const date = new Date();
          const year = date.getFullYear().toString();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          const formattedDateTime = `${hours}:${minutes} -  ${day}/${month}/${year}`;
          setCurrentDateTime(formattedDateTime);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    return (
        <div>
            <h1>{currentDateTime}</h1>
        </div>
    );
}

export default TimeNow;