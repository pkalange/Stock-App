import { Badge } from '@material-ui/core';

import { Button } from '../common-component';

import './nav-menu.css';

export const NavMenu = () => (
    <div className='headerbar2'>
        <Button text='Main Menu' variant='outlined' size='small' />
        <div className='searchNavMenuWrapper'>
            <input placeholder='Search Symbol' />
            <ul className='navMenu'>
                <li>MARKET</li>
                <li>SECTORS</li>
                <li>HEATMAP</li>
                <li>OPTIONS</li>
                <li>FUTUTRES</li>
                <li>CHARTS</li>
                <li><Badge badgeContent='New' color="error">SCREENERS</Badge></li>
            </ul>
        </div>
        <Button text='< Back' variant='outlined' size='small' />
    </div>
);


export default NavMenu;