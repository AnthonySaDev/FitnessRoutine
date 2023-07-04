'use client'
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import DayOfJob from '../DayOfJob';
import Diet from '../Diet';
import TimeNow from '../TimeNow';
import Workout from '../Workout';

const Calendar: React.FC = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      let isToday = i === now.getDate();
  
      days.push(
        <SwiperSlide key={i}>
          <DayOfJob day={i} isToday={isToday} />
          <Diet day={i} />
          <Workout day={i} />
        </SwiperSlide>
      );
    }
  
    const initialSlideIndex = Math.max(0, Math.min(daysInMonth - 1, now.getDate() - Math.floor(5 / 2)));
  
    return (
      <div>
        <div className='flex justify-around text-xl pt-2 font-semibold'>
          <h1>Calendário</h1>
          <h2>
           <TimeNow/>
          </h2>
        </div>
        <Swiper slidesPerView={1} initialSlide={initialSlideIndex+1}>
          {days}
        </Swiper>
      </div>
    );
}
  
export default Calendar;
