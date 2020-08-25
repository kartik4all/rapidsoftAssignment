import React, { Component } from 'react';
import TableItem from './tableItem';
const TabularInfo = (props) => {

    return (
        <div id="tabularInfo">
            {props.tripDetails.map(i =>
                <TableItem item={i} />
            )}
        </div>
    );
}
export default TabularInfo;