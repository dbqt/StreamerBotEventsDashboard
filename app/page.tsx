import { Title } from '@mantine/core';
import Dashboard from './components/dashboard';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Title>Dashboard</Title>
      <Dashboard />
    </main>
  );
}