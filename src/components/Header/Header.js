import React from 'react';
import './header.css';

export default function Header() {
    return (
        <div className='header'>
            <i class="fa fa-shopping-basket basket-icon" aria-hidden="true"></i>
            <h1 className='title'>Hello, Basket</h1>
        </div>
    )
}
