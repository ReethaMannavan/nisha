import { useState,useEffect } from "react";

const AutoIncrementCounter =()=>{

    const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    let interval;
    if (auto) {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [auto]);

  const handleIncrement = () => setCount(prev => prev + 1);
  const handleDecrement = () => setCount(prev => prev - 1);
  const handleReset = () => setCount(0);
  const toggleAuto = () => setAuto(prev => !prev);

  return (
    <div className="counter-container">
      <p className="counter-label">1. Counter with Auto Increment</p>
      <h1 className="counter-number">{count}</h1>

      <div className="button-group">
        <button onClick={handleIncrement}>+ Increment</button>
        <button onClick={handleDecrement}>− Decrement</button>
        <button onClick={handleReset}>⭮ Reset</button>
        <button onClick={toggleAuto}>
          {auto ? '⏸  OFF' : '▶ ON'}
        </button>
      </div>
    </div>

  );

}

export default AutoIncrementCounter;