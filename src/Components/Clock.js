import React, { useEffect, useState } from 'react'

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    }, [])

    const formatHour = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }
    const addZero = (num) => {
        return num < 10 ? `0${num}` : num;
    }
    const formatDate = (date) => {
        const options={
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
        }
        return date.toLocaleDateString(undefined,options);
    }

    return (
        <div>
            <div className='box1 mt-4 p-3 rounded-3 text-center'>
                <h1>DIGITAL CLOCK</h1>
                <div className='time mt-5'>
                    {addZero(formatHour(currentTime.getHours()))}
                    :
                    {addZero(currentTime.getMinutes())}
                    :
                    {addZero(currentTime.getSeconds())}
                    {currentTime.getHours()>=12? " PM" : " AM"}
                </div>
                <div className='date'>
                    {/* {currentTime.toDateString()} */}
                    {formatDate(currentTime)}
                </div>
            </div>
        </div>
    )
}

export default Clock