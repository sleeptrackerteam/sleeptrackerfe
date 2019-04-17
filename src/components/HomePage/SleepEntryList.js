import React from 'react';
import SleepEntry from './SleepEntry';
import { Link } from 'react-router-dom';

const SleepEntryList = (props) => {
    const displayEntries = props.sleepstats.map(sleepstat => {
        return (
            <div>
                <Link to={`api/sleep/${sleepstat.id}`} key={sleepstat.id} >
                    <SleepEntry sleepstat={sleepstat}/>
                </Link>
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