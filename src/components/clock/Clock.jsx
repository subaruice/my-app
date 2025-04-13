import React, { useEffect, useRef, useState } from "react";
import "./clock.css";

const Clock = React.memo(() => {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);
    const refTimer = useRef(null);

    useEffect(() => {
        if (isRunning) {
            refTimer.current = setInterval(() => {
                setTime(prevDate => new Date(prevDate.getTime() + 1000));
            }, 1000);
            return () => clearInterval(refTimer.current);
        }
    }, [isRunning]);

    const toggleClock = () => {
        setIsRunning(prevValue => !prevValue)
        if(isRunning){
            clearInterval(refTimer.current)
        }
    }

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondsDeg = seconds * 6;
    const minutesDeg = minutes * 6 + seconds * 0.1;
    const hoursDeg = (hours % 12) * 30 + minutes * 0.5;


    return (
        <>
            <div className="clock">
                <div
                    className="hand hour"
                    style={{ transform: `rotate(${hoursDeg}deg)` }}
                ></div>
                <div
                    className="hand minute"
                    style={{ transform: `rotate(${minutesDeg}deg)` }}
                ></div>
                <div
                    className="hand second"
                    style={{ transform: `rotate(${secondsDeg}deg)` }}
                ></div>
                <div className="center-dot"></div>
            </div>
            <div className="btn">
                <button
                    className="btn-cl"
                    onClick={toggleClock}
                >
                    {isRunning ? "⏸ Остановить" : "▶️ Запустить"}
                </button>
            </div>
        </>
    );
});

export default Clock;
