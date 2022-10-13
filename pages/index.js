import styles from '../styles/Home.module.css';
import Todo from './components/Todo';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>My Todos</h1>
      <Todo text="learn JS" />
      <br />
      <Todo text="learn React" />
      <br />
      <Todo text="learn NextJS" />
    </div>
  );
}
