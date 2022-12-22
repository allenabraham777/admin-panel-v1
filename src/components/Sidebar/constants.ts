import { AttachMoneyOutlined, BarChartOutlined, ChatBubbleOutline, DynamicFeedOutlined, EmailOutlined, LineStyle, PersonOutline, Report, StorefrontOutlined, Timeline, TrendingUp, WorkOutline } from "@material-ui/icons";

export const menus = [{
    title: "dashboard",
    items: [
        {
            title: "Home",
            component: LineStyle
        },
        {
            title: "Analytics",
            component: Timeline
        },
        {
            title: "Sales",
            component: TrendingUp
        },
    ]
},
{
    title: "Quick Menu",
    items: [
        {
            title: "Users",
            component: PersonOutline
        },
        {
            title: "Products",
            component: StorefrontOutlined
        },
        {
            title: "Transactions",
            component: AttachMoneyOutlined
        },
        {
            title: "Reports",
            component: BarChartOutlined
        },
    ]
},
{
    title: "Notifications",
    items: [
        {
            title: "Mail",
            component: EmailOutlined
        },
        {
            title: "Feedback",
            component: DynamicFeedOutlined
        },
        {
            title: "Messages",
            component: ChatBubbleOutline
        },
    ]
},
{
    title: "Staff",
    items: [
        {
            title: "Manage",
            component: WorkOutline
        },
        {
            title: "Analytics",
            component: Timeline
        },
        {
            title: "Report",
            component: Report
        },
    ]
},];

export default {
    menus
};