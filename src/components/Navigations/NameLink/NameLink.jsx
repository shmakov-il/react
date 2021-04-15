import {NavLink} from "react-router-dom";
import s from "./../Navigations.module.css";

const Link = (props) => {
    const nameLinkElement =
        props.nav.nameLink.map( n => <NavLink activeClassName={s.activeLink} to={n.link}>{n.name}</NavLink> )
    return (
        <div className={s.item}>
            { nameLinkElement }
        </div>
    )
}

export default Link;