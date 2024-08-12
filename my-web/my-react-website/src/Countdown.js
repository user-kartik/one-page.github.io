// Countdown.js
import React, { useEffect, useState } from 'react';

function Countdown({ timer, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete]);

  return <div>{timeLeft} seconds remaining</div>;
}

export default Countdown;
