// components/Menu.tsx
import Link from 'next/link';
import styles from '../../../styles/Menu.module.css'; // Importando o arquivo CSS para estilização

const Menu = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/">Games</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/leaderboard">Leaderboard</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
