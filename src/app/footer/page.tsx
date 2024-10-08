// src/components/Footer.tsx
import styles from '../../../styles/footer.module.css'; // Importando o arquivo CSS para estilização

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>8-chip Game Emulator. All rights reserved.</p>
            <p>© {currentYear} Vitor Navarro</p>
            <a href="https://github.com/vitor-navarro" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                My GitHub
            </a>
        </footer>
    );
};

export default Footer;