import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink} className={s.wrapper}>
                <img className={s.img_avatar} src={props.img} alt="img"/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;