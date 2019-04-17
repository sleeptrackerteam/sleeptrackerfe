import React from "react";
import EntryForm from "./EntryForm";
import axios from "axios";
import SleepEntryList from "./SleepEntryList";

const URL = "https://sleeper-app.herokuapp.com";

export class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
        showPopup: false,
        sleepstats:[]
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("userdata");
    const headers = {headers: {"content-type":"application/JSON", Authorization:token}}
    axios
      .get(`${URL}/api/sleep`, headers)
      .then(res => {
        this.setState({ sleepstats: res.data });
      })
      .catch(err => console.log("123", err));
  }

  addEntry = dogBanana => {
    axios
        .post(`${URL}`, dogBanana)
        .then(res => {
            this.setState({ sleepstats: res.data });
        })
        .catch(err => console.log('456', err))
  }

  deleteEntry = id => {
    const token = localStorage.getItem("userdata");
    const headers = {headers: {"content-type":"application/JSON", Authorization:token}}
    axios
        .delete(`${URL}/api/sleep/${id}`, headers)
        .then(res => {
            this.setState({ sleepstats: res.data })
        })
        .catch(err => console.log('789', err))
  }

  togglePopup() {
      this.setState({
          showPopup:!this.state.showPopup
      })
  }

  render() {
    return (
      <div>
        <h2>You Week in Review</h2>
        <button onClick={this.togglePopup.bind(this)}>Log a new sleep entry</button>
        {this.state.showPopup ?
            <EntryForm 
                addEntry={this.addEntry} 
                closePopup={this.togglePopup.bind(this)} 
                /> 
                : null
        }
        <div>
            <SleepEntryList sleepstats={this.state.sleepstats} deleteEntry={this.deleteEntry}/>
        </div>
      </div>
    );
  }
}

export default Landing;
