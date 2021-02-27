import { Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

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

export const TopBar = () => {

    

    return (
        <div className='topBarWrapper'>
            <ShareHighlightComp
                title='NIFTY'
                value='8711.55'
                showGreen={true}
                percent='0.98%'
                inc='.82.15'
            />
            <ShareHighlightComp
                title='NIFTY FUT'
                value='8788.8'
                showGreen={true}
                percent='1.13%'
                inc='.97.70'
            />
            <ShareHighlightComp
                title='VIX'
                value='20.16'
                showGreen={false}
                percent='-1.66%'
                inc='.-0.34'
            />
            <ShareHighlightComp
                title='VIX'
                value='20.16'
            />
            <Badge badgeContent={5} color="error">
                <NotificationsIcon fontSize='small' fill='#73b3f5' />
            </Badge>
        </div>
    );
};

export default TopBar;
