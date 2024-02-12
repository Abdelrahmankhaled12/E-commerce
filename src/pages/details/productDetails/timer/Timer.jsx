import './style.scss'
import { useState, useEffect } from 'react';

const Timer = ({ product }) => {
    const calculateTimeLeft = () => {
        let time = product.deadline;
        if (product.deadline === null && product.discount > 0) {
            time = +new Date();
        }

        const difference = +new Date(time) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = {
                days: "0",
                hours: "0",
                minutes: "0",
                seconds: "0"
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = value => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <>
            <div className='timer'>
                <p>Remains until the end of the offer</p>
                <div className="boxes">
                    <div className="box">
                        <div className="time">{addLeadingZero(timeLeft.days)}</div>
                        <h6>Days</h6>
                    </div>
                    <div className="box">
                        <div className="time">{addLeadingZero(timeLeft.hours)}</div>
                        <h6>Hours</h6>
                    </div>
                    <div className="box">
                        <div className="time">{addLeadingZero(timeLeft.minutes)}</div>
                        <h6>Mins</h6>
                    </div>
                    <div className="box">
                        <div className="time">{addLeadingZero(timeLeft.seconds)}</div>
                        <h6>Secs</h6>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Timer