import Link from 'next/link';
import styles from '../../styles/home.module.css';

export default function Home() {

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>8-chip Game Emulator</h1>
        <p className={styles.subtitle}>Enter the world of classics!</p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href="/games" className={styles.card}>
            <h2>Games &rarr;</h2>
            <p>Choose and play your favorite games.</p>
          </Link>

          <Link href="/leaderboard" className={styles.card}>
            <h2>Ranking &rarr;</h2>
            <p>View scores and competitions.</p>
          </Link>

          <Link href="/profile" className={styles.card}>
            <h2>Profile &rarr;</h2>
            <p>Manage your profile and settings.</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {currentYear} 8-chip Game Emulator. All rights reserved.</p>
      </footer>
    </div>
  );
}
