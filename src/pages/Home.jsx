import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Главная страница</h1>
      <p>Тут потом придумаем что-то красивое для всех пользователей.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};
