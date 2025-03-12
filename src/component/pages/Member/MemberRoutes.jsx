import BecomeMember from "./components/BecomeMember";
import FeeStructure from "./components/FeeStructure";
import HowToApply from "./components/HowToApply";
import MembershipBenefits from "./components/MembershipBenefits";
import MembershipQuery from "./components/MembershipQuery";

export const MemberRoutes=[
    {
        path:'how-to-apply',
        element:<HowToApply/>
    },
    {
        path:'/become-a-member',
        element:<BecomeMember/>
    },
    {
        path:'/fee-structure',
        element:<FeeStructure/>
    },
    {
        path:'/membership-benefits',
        element:<MembershipBenefits/>
    },
    {
        path:'/membership-query',
        element:<MembershipQuery/>
    }
]

