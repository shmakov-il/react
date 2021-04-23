import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.header_img} src="http://cliparthouse.ru/wp-content/uploads/animals/61-animals-ass-1.jpg" alt="Logo"/>
            <div className={s.block}>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;