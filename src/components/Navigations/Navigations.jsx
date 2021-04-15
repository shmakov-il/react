import s from './Navigations.module.css';
import FriendsContainer from "./Friends/FriendsContainer";
import NameLinkContainer from "./NameLink/NameLinkContainer";

const Navigations = (props) => {
    return (
        <nav className={s.navigation}>
            <NameLinkContainer store={props.store}/>
            <FriendsContainer store={props.store} />
        </nav>
    )
}

export default Navigations;