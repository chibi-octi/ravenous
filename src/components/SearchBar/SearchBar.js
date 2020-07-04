import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'bestMatch': 'best_match',
    'highestRated': 'rating',
    'mostReviewed': 'review_coun'
};

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = [];
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
                return <li key={sortByOptionValue}>{sortByOption}</li>
            });
            
    }

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="/">Let's Go</a>
                </div>
            </div>
        )
    };
};
