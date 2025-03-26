import React, { useState, useEffect } from 'react';
import './Time.css';

export const Time = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
      setTime(0);
    } else {
      setIsRunning(true);
    }
  };

  return (
    <>
      <div className="component-card">
        <h2 className="text-xl">Cronómetro</h2>

        <div className="flex flex-col items-center gap-6">
          <div className="time-display">
            <span id="formatted-time" className="text-4xl font-mono font-medium tabular-nums tracking-wider">
              {formatTime(time)}
            </span>
          </div>

          <div className="button-container">
            <button
              id="start-button"
              className="btn-primary w-32 flex items-center justify-center gap-2"
              aria-label="Iniciar/Parar"
              onClick={handleStartStop}
            >
              <span className="icon">{isRunning ? '■' : '▶'}</span>
              <span>{isRunning ? 'Parar' : 'Iniciar'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
