import React from 'react';
import moment from 'moment';
const TableItem = (props) => {
    let item = props.item;
    let totalKm =0;
    let totalExp=0;
    item.tripLists && item.tripLists.length > 0 && item.tripLists.map(a =>{
        totalKm=totalKm+ Number(a.totalKm?a.totalKm:0);
        a.tripExpenses && a.tripExpenses.length>0 && a.tripExpenses.map(i=>totalExp=totalExp+i.amount)
    })
    
    return (
        <div className="tabularInfoTable">
            <div className="tabularInfoHead">
                <div className="row">
                    <div className="col-5">Date : {moment(Number(item.startDay)).format("DD/MM/YYYY hh:mm a")} - {moment(Number(item.endDay)).format("DD/MM/YYYY hh:mm a")} ({moment.duration(Number(item.dailyRunningTime)).hours()}hours {moment.duration(Number(item.dailyRunningTime)).minutes()} minutes)</div>
    <div className="col-5"><span style={{color:'#37c4c9'}}>Total km {totalKm} </span><span style={{color:'#c2993b'}}>Total Expense: Rs. {totalExp}</span></div>
                    <div className="col-2" style={{textAlign:'center',fontSize:'15px'}}>-</div>
                </div>
            </div>
            <div className="tabularInfoDesc">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Trip Starts(Node) to Trip Ends(Node)</th>
                            <th scope="col">Driver Name</th>
                            <th scope="col">Trip Expenses</th>
                            <th scope="col">Trip km</th>
                            <th scope="col">Trip GPS km</th>
                            <th scope="col">Trip Time</th>
                            <th scope="col">Odometer Reading</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.tripLists && item.tripLists.length > 0 && item.tripLists.map((i, index) =>{
                            let tot=0;
                            if(i.tripExpenses && i.tripExpenses.length>0){
                                i.tripExpenses.map(a=>tot =tot+a.amount)
                            }else{
                                tot=0
                            }
                           
                            return <tr>
                            <td scope="row">{index}</td>
                            <td>{i.startPointNode}({moment(Number(i.startTripDate)).format("hh:mm a")})<i class="fas fa-arrow-right" /> {i.endPointNode}({moment(Number(i.endTripDate)).format("hh:mm a")})</td>
                            <td>{i.driverName}</td>
                        <td>Rs. {tot} <span style={{padding:'2px 8px',backgroundColor:'#37c4c9',color:'white',borderRadius:'50%'}}>i</span></td>
                            <td>{i.totalKm} km</td>
                            <td>{i.gpsDistance} km</td>
                            <td>{moment.duration(Number(i.tripRunningTime)).minutes()} min</td>
                            <td>
                                <div className="row" style={{ width: '180px' }}>
                                    <div className="col-5">
                                        <div><img src={i.startODOMeterUrl} style={{ width: '20px' }} /></div>
                                        <div>{i.startODOMeter ? i.startODOMeter : 'N.A'}</div>

                                    </div>
                                    <div className="col-2">
                                        <i class="fas fa-arrow-right" style={{ paddingTop: '15px' }} />
                                    </div>
                                    <div className="col-5">
                                        <div><img src={i.endODOMeterUrl} style={{ width: '20px' }} /></div>
                                        <div>  {i.endODOMeter ?  i.endODOMeter : 'N.A'}</div>

                                    </div>
                                </div>
                            </td>
                            <td><button className="tablebtn">Movement Report</button><button className="tablebtn">Stoppage Report</button></td>
                        </tr>
                        }
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    );
}
export default TableItem