import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddShop() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Добавляем магазин:', { name, logo });
    // Тут отправка на сервер
    navigate('/'); // после добавления назад на панель
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Добавить магазин</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Название магазина"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="URL логотипа"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Сохранить</button>
      </form>
      <button style={styles.backBtn} onClick={() => navigate('/')}>⬅ Назад</button>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    background: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
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
