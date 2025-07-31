import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ShopSettings() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Настройки магазина {id}</h1>
      <div style={styles.card}>
        Тут будут настройки (смена названия, логотипа, удаление и т.д.)
      </div>
      <button style={styles.backBtn} onClick={() => navigate('/')}>⬅ На панель</button>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif',
    background: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  backBtn: {
    padding: '10px',
    background: '#ddd',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
