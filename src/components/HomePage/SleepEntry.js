import React from 'react';

const SleepEntry = props => {
    return (
        <div>
            <h4>Date: {props.sleepstat.date}</h4>
            <p>Time slept:{props.sleepstat.timeSlept} hours</p>
            <p>Mood at bed time:</p>{props.sleepstat.sleepMood}
            <p>Mood when waking:</p>{props.sleepstat.wakeMood}
        </div>
    )
}

export default SleepEntry;
SleepEntry.defaultProps = {
    sleepstat: {
        date: 1,
        timeSlept: 2,
        sleepMood: 3,
        wakeMood: 4
    }
}