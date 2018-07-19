import React from 'react';
import Header from '../components/Header';
import SearchContainer from '../Containers/SearchContainer';

import '../../static/styles/components/results.scss';
import ResultsContainer from '../Containers/ResultsContainer';

class SearchRoute extends React.Component {
    render() {
        return (
            <div className="search__results">
                <div className="search-result__header">
                    <Header />
                    <SearchContainer />
                </div>
                <ResultsContainer />
            </div>
        );
    }
}

export default SearchRoute;
