export type Props = {
    component: React.FC<{ className: string; }>;
    title: string;
};

export const MenuItem = ({ component, title }: Props) => {
    const Icon = component;
    return <li className="item">
        <Icon className="icon" /> {title}
    </li>;
};

export default MenuItem;