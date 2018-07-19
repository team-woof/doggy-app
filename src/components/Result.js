import React from 'react';
import "../../static/styles/components/result.scss";

class Result extends React.Component {
    render() {
        return (
            <div className="result-card">
                <div className="result-card__img-box">
                    <img className="result-card__img" src={this.props.img} alt={this.props.name} />
                </div>
                <div className="result-card__details">
                    <div className="result-card__name"><strong>Name: </strong>{this.props.name}</div>
                    <div className="result-card__location"><strong>Location: </strong>{this.props.location}</div>
                    <div className="result-card__gender"><strong>Gender: </strong>{this.props.gender}</div>
                </div>
                <button className="result-card__profile-button">Full Profile</button>
            </div>
        )
    }
}

export default Result;