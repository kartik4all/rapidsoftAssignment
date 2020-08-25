import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Inputs from './components/inputs';
import DashInfo from './components/dashInfo';
import TabularInfo from './components/tabularInfo';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tripData: {}
    }
  }
  callApi = (from, to) => {

    let data = {
      "clientId": 10,
      "dataRecord": {
        "userRoleId": 4,
        "userRoleName": "COMPANY",
        "userId": 10
      },
      "fromDate": moment(from).valueOf(),
      "toDate": moment(to).valueOf(),
      "tripId": 36
    }
    axios.post(`http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36`, data)
      .then(res => {
        console.log('res', res.data.responseCode)
        if (res.data && res.data && res.data.responseCode && res.data.responseCode == '2000') {
          this.setState({ tripData: res.data.data })
        } else {
          alert('Server Error')
        }
      }).catch((e) => alert(e))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Inputs callApi={this.callApi} />
         {this.state.tripData && this.state.tripData.vehicleDeviceId && <DashInfo tripData={this.state.tripData} />}
         {this.state.tripData && this.state.tripData.tripDetails && this.state.tripData.tripDetails.length>0 && <TabularInfo tripDetails={this.state.tripData.tripDetails} />}
        </div>
      </div>
    );
  }


}

export default App;
