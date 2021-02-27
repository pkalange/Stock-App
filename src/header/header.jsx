import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { Button } from '../common-component';
import { TopBar } from './top-bar';

import './header.css';

export const Header = () => {
    return (
        <div className="root">
            <AppBar>
                <Toolbar variant="regular" className="headerbar">
                    <Typography variant="h6">
                        heckly
                    </Typography>
                    <div className='extraInfo'>
                        <div className='showInfo'>
                            <TopBar />
                        </div>
                        <div className='showIcons'>
                            <Button variant='outlined' size='small' text='+' />
                            <Button variant='outlined' size='small' />
                            <Button variant='outlined' size='small' text='-' />
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
