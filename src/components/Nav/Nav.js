import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <div className='search-container'>
                <div className='search-container-nav'>
                    <form>
                        <input className='input-box' type='text' name='filterBox' value='Filter For Anything' />
                    </form>
                </div>
            </div>
        )
    }
}

export default Nav;
