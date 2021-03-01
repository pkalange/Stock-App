import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { map } from 'lodash';

import { data } from './data';

import  './top-bar.css';

const ShareHighlightComp = props => (
    <div className='shareHighlight'>
        <span className='yellow'>{props.title}</span>
        <span className='white'>{props.value}</span>
        { props.percent &&
            <span className={props.showGreen ? 'green' : 'red'}>{props.inc} ( {props.percent} )</span>
        }
    </div>
);

export const TopBar = () => (
    <div className='topBarWrapper'>
        {
            map(data, item => (
                <ShareHighlightComp
                    title={item.title}
                    value={item.value}
                    showGreen={item.showGreen}
                    percent={item.percent}
                    inc={item.inc}
                />
            ))
        }
        <Badge badgeContent={5} color="error">
            <NotificationsIcon fontSize='medium' />
        </Badge>
    </div>
);

export default TopBar;
