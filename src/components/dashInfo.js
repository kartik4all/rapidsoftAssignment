import React, { Component } from 'react';
const DashInfo = (props) => {
    return (
        <div id="dashInfo" >
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row" id="infoTabs">
                            <div className="col-md-4" >
                                <div style={{ backgroundColor: '#37c4c9' }}> <i class="fas fa-truck-moving" /> <span>{props.tripData.vehicleNo}</span></div>
                            </div>
                            <div className="col-md-4" >
                                <div style={{ backgroundColor: '#c2993b' }}> <i class="fas fa-truck-moving" /> Total Trips : <span>{props.tripData.totalTrips}</span></div>
                            </div>
                            <div className="col-md-4" >
                                <div style={{ backgroundColor: '#005a93' }}><i class="fas fa-tachometer-alt" /> Total km : <span>{props.tripData.totalKm}</span></div>
                            </div>
                            <div className="col-md-4" >
                                <div style={{ backgroundColor: '#00a74b' }}><i class="fas fa-clock" /> Trip Time : <span>{props.tripData.totalTripTime}</span></div>
                            </div>
                            <div className="col-md-4" >
                                <div style={{ backgroundColor: '#962297' }}><i class="fas fa-clock" /> Total Time : <span>{props.tripData.totalTime}</span></div>
                            </div>
                            <div className="col-md-4" >
                                <div style={{ backgroundColor: '#6a5718' }}> <i class="fas fa-wallet" /> Total Expenses : Rs.<span>{props.tripData.totalExpences}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-3" id="infoExt">
                        <div>
                            <i class="fas fa-wallet" /> Other exp : Rs {props.tripData.otherExpenses} <i class="fas fa-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashInfo;