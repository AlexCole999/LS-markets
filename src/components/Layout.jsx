import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Главная', path: '/' },
    { title: 'Админ‑панель', path: '/admin' },
    { title: 'Все магазины', path: '/shops' },
    { title: 'Мои магазины', path: '/my-shops' },
    { title: 'Добавить магазин', path: '/add-shop' },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={styles.burger}>☰</button>
        <h1 style={styles.logo}>Мой сервис</h1>
      </div>

      <div style={styles.content}>{children}</div>

      {menuOpen && (
        <div style={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div style={styles.sideMenu} onClick={(e) => e.stopPropagation()}>
            {menuItems.map((item, i) => (
              <div
                key={i}
                style={styles.menuItem}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#f9f9f9',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  burger: {
    fontSize: '24px',
    background: 'none',
    border: 'none',
    marginRight: '16px',
    cursor: 'pointer',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: '16px',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
  },
  sideMenu: {
    background: '#fff',
    width: '210px',
    padding: '16px',
    paddingTop: '90px',
    display: 'flex',
    flexDirection: 'column',
  },
  menuItem: {
    padding: '12px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '8px',
    background: '#f5f5f5',
    textAlign: 'left',
  },
};
