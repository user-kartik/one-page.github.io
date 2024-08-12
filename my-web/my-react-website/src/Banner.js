import React, { useState, useEffect } from 'react';

function Banner({ description, link, timer }) {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  if (timeLeft <= 0) {
    return null;
  }

  return (
    <div className="banner">
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      )}
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
}

export default Banner;
