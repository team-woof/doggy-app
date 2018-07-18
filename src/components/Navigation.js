import React from 'react';
import { Link } from 'react-router-dom';

import '../../static/styles/components/navigation.scss';


class Navigation extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <ul className="main-navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/account/messages">Messages</Link></li>
                <li><Link to="/">Search</Link></li>
            </ul>
        )
    }
}

export default Navigation;