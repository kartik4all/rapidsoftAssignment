import React, { Component } from 'react';
class Inputs extends Component {
    constructor(props){
        super(props);
        this.state={
            from:'',
            to:''
        }
    }
    handleChange=(e,name)=>{
console.log('eee',e.target.value,name)
this.setState({[name]:e.target.value})
    }
    submitForm=()=>{
        if(this.state.from && this.state.to){
this.props.callApi(this.state.from,this.state.to);
        }else{
            alert('Please Fill Date From & Date To')
        }
    }
    render() {
        return (
            <div id="inputs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" id="tripSummary">
                            <div><h5>Trip Summary</h5></div>
                            <div className="summary"><span>Dashboard </span>/ Trip Summary</div>
                        </div>
                        <div className="col-md-6" id="tripInputs">
                            <form>
                                <div class="form-row align-items-center">
                                    <div class="col-sm-5 my-1">
                                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">From</div>
                                            </div>
                                            <input type="date" class="form-control" value={this.state.from} id="inlineFormInputGroupUsername" placeholder="From" onChange={(e)=>this.handleChange(e,'from')}/>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 my-1">
                                        <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text">To</div>
                                            </div>
                                            <input type="date" class="form-control" value={this.state.to} id="inlineFormInputGroupUsername" placeholder="To"onChange={(e)=>this.handleChange(e,'to')} />
                                        </div>
                                    </div>
                                    <div class="col-sm-1 my-1">
                                        <button type="button" class="btn" id="inputSearch" onClick={this.submitForm}><i class="fas fa-search" /></button>
                                    </div>
                                    <div class="col-sm-2 my-1">
                                        <button type="button" class="btn" id="inputExport" ><i class="fas fa-file-export" />Export</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Inputs;