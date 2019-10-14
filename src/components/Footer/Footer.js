import React, { Component } from 'react';
import './footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-content'><span>All, </span> <a href='#'>Pending, </a> <a href='#'>Purchased</a></div>
            </div>
        )
    }
}
export default Footer;
