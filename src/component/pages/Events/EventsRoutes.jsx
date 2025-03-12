import UpcomingEvents from './component/UpcomingEvents';
import EventCalender from './component/EventCalender';
import Webinar from './component/Webinar';
import TechnicalConference from './component/TechnicalConference';
import TradeShow from './component/TradeShow';
export const Events=[
    {
        path:'/webinar',
        element:<Webinar/>
    },
    {
        path:'/technical-conference',
        element:<TechnicalConference/>
    },
    {
        path:'/trade-show',
        element:<TradeShow/>
    },
    {
        path:'/event-calender',
        element:<EventCalender/>
    },
    {
        path:'/upcoming-events',
        element:<UpcomingEvents/>
    },
]