import React from 'react';

import { Button } from '../common-component';
import { TopBar } from './top-bar';

import './header.css';

export const Header = () => {
    return (
        <div className="headerbar">
            <div className="headerbar1">
                <div className='showInfo'>
                    <TopBar />
                </div>
                <div className='showIcons'>
                    <Button variant='outlined' size='small' text='+' />
                    <Button variant='outlined' size='small' />
                    <Button variant='outlined' size='small' text='-' />
                </div>
            </div>
            <div className="headerbar2">
            </div>
            <div className='symbolIcon'>
                heckyl
            </div>
        </div>
    );
};

export default Header;
