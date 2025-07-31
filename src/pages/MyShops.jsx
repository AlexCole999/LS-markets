import React from 'react';
import { useNavigate } from 'react-router-dom';

// Временные данные твоих магазинов
const myShops = [
  { id: 101, name: 'Мой магазин 1', logo: 'https://picsum.photos/60/60?random=21' },
  { id: 102, name: 'Мой магазин 2', logo: 'https://picsum.photos/60/60?random=22' },
  { id: 103, name: 'Мой магазин 3', logo: 'https://picsum.photos/60/60?random=23' },
];

export default function MyShops() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Мои магазины</h1>
      <div style={styles.list}>
        {myShops.map(shop => (
          <div
            key={shop.id}
            style={styles.shopItem}
            onClick={() => navigate(`/shop/${shop.id}`)}
          >
            <img src={shop.logo} alt={shop.name} style={styles.shopLogo} />
            <div style={styles.shopInfo}>
              <span style={styles.shopName}>{shop.name}</span>
              <button
                style={styles.settingsBtn}
                onClick={(e) => {
                  e.stopPropagation(); // не переходить в магазин
                  navigate(`/shop/${shop.id}/settings`);
                }}
              >
                ⚙️ Настройки
              </button>
            </div>
          </div>
        ))}
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
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  shopItem: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '12px',
    padding: '12px',
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
  shopLogo: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    marginRight: '12px',
  },
  shopInfo: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  shopName: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
  },
  settingsBtn: {
    alignSelf: 'flex-start',
    padding: '6px 10px',
    fontSize: '14px',
    borderRadius: '8px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  backBtn: {
    marginTop: '20px',
    padding: '10px',
    background: '#ddd',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
