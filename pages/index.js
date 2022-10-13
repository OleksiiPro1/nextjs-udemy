import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>My Todos</h1>
      </div>
      <div className="card">
        <h2>Title</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}
