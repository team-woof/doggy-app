import React from 'react';
import Result from './result'
import { isArray } from 'util';


class Results extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                {isArray(this.props.searchResults)
                    ? this.props.searchResults.map(result => {
                        console.log(result.breed);
                    })
                    : ""
                }
            </div>
        )
    }
}

export default Results