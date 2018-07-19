import React from 'react';
import Result from './result'
import { isArray } from 'util';


class Results extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="results-container">
                {
                    isArray(this.props.searchResults)
                        ? this.props.searchResults.map(result => {
                            return <Result
                                key={result.name + result.id}
                                img={result.images}
                                name={result.name}
                                location={result.location}
                                gender={result.gender}
                            />

                        })
                        : ""
                }
            </div>
        )
    }
}

export default Results