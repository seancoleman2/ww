'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('January 17, 2026 16:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-8 mt-aut border-t border-gold/20o">
      <h2 className="text-2xl font-exmouth text-gold mb-6">Counting Down to Our Special Day</h2>
      <div className="flex justify-center space-x-4 md:space-x-8">
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gold/20 w-20 md:w-24">
            <span className="text-3xl md:text-4xl font-exmouth text-gold">{timeLeft.days}</span>
          </div>
          <span className="text-gold mt-2">days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gold/20 w-20 md:w-24">
            <span className="text-3xl md:text-4xl font-exmouth text-gold">{timeLeft.hours}</span>
          </div>
          <span className="text-gold mt-2">hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gold/20 w-20 md:w-24">
            <span className="text-3xl md:text-4xl font-exmouth text-gold">{timeLeft.minutes}</span>
          </div>
          <span className="text-gold mt-2">min</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gold/20 w-20 md:w-24">
            <span className="text-3xl md:text-4xl font-exmouth text-gold">{timeLeft.seconds}</span>
          </div>
          <span className="text-gold mt-2">s</span>
        </div>
      </div>
    </div>
  );
}