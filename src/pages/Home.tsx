import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>SportsDB</h1>
          <p className={styles.subtitle}>For all your sports needs</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
