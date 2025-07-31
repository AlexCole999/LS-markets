import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const items = [
    { title: 'Все магазины', path: '/shops', emoji: '🛍️' },
    { title: 'Мои магазины', path: '/my-shops', emoji: '👤' },
    { title: 'Добавить магазин', path: '/add-shop', emoji: '➕' },
    { title: 'Настройки магазина', path: '/shop/1/settings', emoji: '⚙️' }, // потом заменим на динамический
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Панель управления</h1>
      <div style={styles.grid}>
        {items.map((item, i) => (
          <div key={i} style={styles.card} onClick={() => navigate(item.path)}>
            <div style={styles.emoji}>{item.emoji}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif',
    background: '#f4f4f4',
    minHeight: '100vh',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: '1fr 1fr',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'transform 0.15s',
  },
  emoji: {
    fontSize: '32px',
    marginBottom: '10px',
  },
};
