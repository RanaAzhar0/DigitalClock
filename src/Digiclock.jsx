import React, { useState, useEffect } from 'react';

const Digiclock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="text-6xl font-bold text-center text-white">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Digiclock;
