import React from "react";
import EntryForm from "./EntryForm";
import axios from "axios";
import SleepEntryList from "./SleepEntryList";
import SleepEntry from './SleepEntry';
import { Route, Switch } from 'react-router-dom';

const URL = "https://sleeper-app.herokuapp.com";

export class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
        showPopup: false,
        sleepstats:[],
        active:[]
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

  addEntry = (event, newEntry) => {
    event.preventDefault();
    console.log(newEntry)
    const token = localStorage.getItem("userdata");
    const headers = {headers: {"content-type":"application/JSON", Authorization:token}}
    axios
        .post(`${URL}/api/sleep`, newEntry, headers)
        .then(res => {
            this.setState({ sleepstats: res.data });
        })
        .catch(err => console.log('456', err.response))
  }

  deleteEntry = id => {
    const token = localStorage.getItem("userdata");
    const headers = {headers: {"content-type":"application/JSON", Authorization:token}}
    axios
        .delete(`${URL}/api/sleep/${id}`, headers)
        .then(res => {
            this.setState({ sleepstats: this.state.sleepstats.filter(sleepstat => sleepstat.id !== id) })
        })
        .catch(err => console.log('789', err))
  }


  togglePopup() {
      this.setState({
          showPopup:!this.state.showPopup
      })
  }

  setActive = id => {
    const saved = this.state.sleepstats.find(stat => {
      return stat.id === id})
    this.setState({
      active: saved
    },
    this.props.history.push(`/home/sleep/${id}`)
    )
  }

  render() {
    return (
      <div>
        <h2>Your Week in Review</h2>
        <button onClick={this.togglePopup.bind(this)}>Log a new sleep entry</button>
        {this.state.showPopup ?
            <EntryForm 
                addEntry={this.addEntry} 
                closePopup={this.togglePopup.bind(this)} 
                /> 
                : null
        }
        <div>
          <Switch>
            <Route path="/home/sleep/:id" render={props =>
                <SleepEntry sleepstat={this.state.active}/>} 
              />
            <Route path="/" render={props => 
              <SleepEntryList sleepstats={this.state.sleepstats} deleteEntry={this.deleteEntry} setActive={this.setActive}/>
            }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Landing;
