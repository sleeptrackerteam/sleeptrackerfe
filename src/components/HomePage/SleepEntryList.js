import React from 'react';
import SleepEntry from './SleepEntry';
import { Link } from 'react-router-dom';

const SleepEntryList = (props) => {
    const displayEntries = props.sleepstats.map(sleepstat => {
        return (
            <div onClick={() => {props.setActive(sleepstat.id)}} key={sleepstat.id}>
                    <SleepEntry sleepstat={sleepstat}/>
                <button onClick={() => props.deleteEntry(sleepstat.id)}>Delete</button>
            </div>
        )
    });
    return (
        <div>
            {displayEntries}
        </div>
    )
}

export default SleepEntryList;