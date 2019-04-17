import React from 'react';
import SleepEntry from './SleepEntry';

const SleepEntryList = (props) => {
    const displayEntries = props.sleepstats.map(sleepstat => {
        return (
            <div>
                <div onClick={() => {props.setActive(sleepstat.id)}} key={sleepstat.id}>
                    <SleepEntry sleepstat={sleepstat}/>
                </div>
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