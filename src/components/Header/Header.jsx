import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img className={s.header_img} src="http://cliparthouse.ru/wp-content/uploads/animals/61-animals-ass-1.jpg" alt="Logo"/>
        </header>
    )
}

export default Header;