"use client"
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date and time for the countdown
    const targetDate = new Date('2023-12-31T23:59:59').getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = targetDate - now;

      // Calculate the days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });

      // Clear the interval when the countdown is complete
      if (timeRemaining < 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center space-x-4 text-3xl font-bold">
        <div className="flex items-center">
          <span className="bg-gray-200 rounded-full px-2 py-1">
            {countdown.days.toString().padStart(2, '0')}
          </span>
          <span className="text-gray-500 ml-1">days</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center">
          <span className="bg-gray-200 rounded-full px-2 py-1">
            {countdown.hours.toString().padStart(2, '0')}
          </span>
          <span className="text-gray-500 ml-1">hours</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center">
          <span className="bg-gray-200 rounded-full px-2 py-1">
            {countdown.minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-gray-500 ml-1">mins</span>
        </div>
        <span className="text-gray-500">:</span>
        <div className="flex items-center">
          <span className="bg-gray-200 rounded-full px-2 py-1">
            {countdown.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-gray-500 ml-1">secs</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
