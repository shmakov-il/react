import s from "./../Navigations.module.css";
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    const friendElement = props.sidebar.friends.map( f => <NavLink to={f.link}
                                                           activeClassName={s.activeLink}
                                                           className={s.friend}>{f.name}</NavLink>);
    return (
        <div className={s.friends_group}>
            { friendElement }
        </div>
    )
}

export default Friends;