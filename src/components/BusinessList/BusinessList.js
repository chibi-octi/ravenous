import React from 'react';
import './BusinessList.css';
import Business from '../Bussiness/Business';

 export default class BusinessList extends React.Component {
    render(){
        return(
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}
