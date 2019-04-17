import React from 'react';

class EntryForm extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h2>New Sleep Entry</h2>
                        <form>
                            <h4>Total </h4>
                            <input
                            type="time"
                            />
                            <h4>Mood at bed time:</h4>
                            <span className="emojis">
                                <i className="far fa-frown"></i>
                                <i className="far fa-meh"></i>
                                <i className="far fa-smile"></i>
                                <i className="far fa-smile-beam"></i>
                            </span>
                            <h4>Mood when waking:</h4>
                            <span className="emojis">
                                <i className="far fa-frown"></i>
                                <i className="far fa-meh"></i>
                                <i className="far fa-smile"></i>
                                <i className="far fa-smile-beam"></i>
                            </span>
                            <h4>Mood throughout day:</h4>
                            <span className="emojis">
                                <i className="far fa-frown"></i>
                                <i className="far fa-meh"></i>
                                <i className="far fa-smile"></i>
                                <i className="far fa-smile-beam"></i>
                                <button type="submit">Add Entry</button>
                            </span>
                            <button onClick={this.props.closePopup}>Close</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EntryForm;