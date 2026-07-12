
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useState } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.menu_evento}>
                    <span> portfólio </span>
                    <button
                        className={styles.btnMenu}
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        ☰
                    </button>
                </div>

            </div>
            <div className={styles.cont_menu}>
                <nav className={menuAberto ? styles.navAtivo : styles.nav}>
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/Sobre"}>sobre</Link>
                    <Link to={"/Contato"}>contato</Link>

                </nav>
            </div>
        </header>

    )
}

export default Header;