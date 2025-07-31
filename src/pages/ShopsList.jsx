import React from 'react';
import { useNavigate } from 'react-router-dom';

const shops = [
  { id: 1, name: 'Магазин А', logo: 'https://picsum.photos/60/60?random=11' },
  { id: 2, name: 'Магазин B', logo: 'https://picsum.photos/60/60?random=12' },
  { id: 3, name: 'Магазин C', logo: 'https://picsum.photos/60/60?random=13' },
  { id: 4, name: 'Магазин D', logo: 'https://picsum.photos/60/60?random=14' },
];

export default function ShopsList() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Выберите магазин</h1>
      <div style={styles.list}>
        {shops.map(shop => (
          <div
            key={shop.id}
            style={styles.shopItem}
            onClick={() => navigate(`/shop/${shop.id}`)}
          >
            <img src={shop.logo} alt={shop.name} style={styles.shopLogo} />
            <span style={styles.shopName}>{shop.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '16px',
    background: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
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
    transition: 'background 0.2s',
  },
  shopLogo: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    marginRight: '12px',
  },
  shopName: {
    fontSize: '18px',
    fontWeight: '500',
  },
};
