import ForthcomingEvents from './component/ForthcomingEvents';
import PastEvents from './component/PastEvents';
import WebinarsSeminars from './component/WebinarsSeminars';
export const Events=[
    {
        path:'/forthcoming-events',
        element:<ForthcomingEvents/>,    
    },
    {
        path:'/past-events',
        element:<PastEvents/>,
    },
    {
        path:'/webinars-seminars',
        element:<WebinarsSeminars/>,
    },
]