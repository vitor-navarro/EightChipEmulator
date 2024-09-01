import Link from 'next/link';
import styles from '../../styles/home.module.css';

export default function Home() {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Emulador de Jogos</h1>
        <p className={styles.subtitle}>Entre no mundo dos clássicos!</p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/games" className={styles.card}>
            <h2>Jogos &rarr;</h2>
            <p>Escolha e jogue seus jogos favoritos.</p>
          </Link>

          <Link href="/leaderboard" className={styles.card}>
            <h2>Ranking &rarr;</h2>
            <p>Veja as pontuações e competições.</p>
          </Link>

          <Link href="/profile" className={styles.card}>
            <h2>Perfil &rarr;</h2>
            <p>Gerencie seu perfil e configurações.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {currentYear} Emulador de Jogos 8-chip. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
