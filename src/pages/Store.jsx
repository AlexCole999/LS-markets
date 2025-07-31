import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailsModal from '../components/ProductDetailsModal';

export default function Store() {
  const navigate = useNavigate();
  const { id } = useParams(); // берём id магазина из URL

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [viewProd, setViewProd] = useState(false);

  const categories = [
    { id: 1, name: 'Фрукты' },
    { id: 2, name: 'Овощи' },
    { id: 3, name: 'Напитки' },
    { id: 4, name: 'Мясо' },
    { id: 5, name: 'Молочка' },
  ];

  const products = [
    { id: 1, name: 'Яблоко', price: 20, image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, name: 'Банан', price: 15, image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, name: 'Клубника', price: 40, image: 'https://picsum.photos/200/200?random=3' },
    { id: 4, name: 'Молоко', price: 30, image: 'https://picsum.photos/200/200?random=4' },
    { id: 5, name: 'Сок', price: 25, image: 'https://picsum.photos/200/200?random=5' },
    { id: 6, name: 'Мясо', price: 100, image: 'https://picsum.photos/200/200?random=6' },
  ];

  const handleQuantityChange = (id, delta) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const newVal = Math.max(current + delta, 0);
      return { ...prev, [id]: newVal };
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src="https://picsum.photos/60/60" alt="logo" style={styles.logo} />
        <h1 style={styles.shopName}>Магазин {id}</h1>
        <button onClick={() => navigate('/')} style={styles.backBtn}>✕</button>
      </div>

      <div style={styles.categoriesWrapper}>
        <button onClick={() => setShowAllCategories(true)} style={styles.allButton}>Все</button>
        <div style={styles.categoriesList}>
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                ...styles.categoryItem,
                backgroundColor: selectedCategory === cat.id ? '#007bff' : '#eee',
                color: selectedCategory === cat.id ? '#fff' : '#000',
              }}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.productsGrid}>
        {products.map(prod => (
          <div key={prod.id} style={styles.productCard}>
            <img
              src={prod.image}
              alt={prod.name}
              style={styles.productImage}
              onClick={() => setViewProd(true)}
            />
            <h2 style={styles.productName}>{prod.name}</h2>
            <p style={styles.productPrice}>{prod.price}₽</p>
            <div style={styles.quantityControls}>
              <button onClick={() => handleQuantityChange(prod.id, -1)} style={styles.quantityBtn}>-</button>
              <span style={styles.quantityVal}>{quantities[prod.id] || 0}</span>
              <button onClick={() => handleQuantityChange(prod.id, 1)} style={styles.quantityBtn}>+</button>
            </div>
            <button style={styles.orderBtn}>Заказать</button>
          </div>
        ))}
      </div>

      <div style={styles.footer}>© 2025 Мой Магазин. Быстрая доставка, лучшие цены.</div>

      {showAllCategories && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3 style={styles.modalTitle}>Все категории</h3>
            <div style={styles.modalCategories}>
              {categories.map(cat => (
                <div
                  key={cat.id}
                  style={styles.modalCatItem}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowAllCategories(false);
                  }}
                >
                  {cat.name}
                </div>
              ))}
            </div>
            <button onClick={() => setShowAllCategories(false)} style={styles.closeBtn}>Закрыть</button>
          </div>
        </div>
      )}

      {viewProd && (
        <ProductDetailsModal onClose={() => setViewProd(false)} />
      )}
    </div>
  );
}

const styles = {
  container: { padding: '16px', background: '#f9f9f9', fontFamily: 'sans-serif', minHeight: '100vh' },
  header: { display: 'flex', alignItems: 'center', marginBottom: '16px', position: 'relative' },
  logo: { borderRadius: '50%', marginRight: '8px', width: '60px' },
  shopName: { fontSize: '20px', fontWeight: 'bold', flexGrow: 1 },
  backBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#333',
    position: 'absolute',
    right: 0
  },
  categoriesWrapper: { display: 'flex', alignItems: 'center', marginBottom: '16px' },
  allButton: { padding: '8px 12px', borderRadius: '16px', border: 'none', background: '#ddd', marginRight: '8px', cursor: 'pointer' },
  categoriesList: { display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', },
  categoryItem: { padding: '8px 12px', borderRadius: '16px', marginRight: '8px', cursor: 'pointer', whiteSpace: 'nowrap' },
  productsGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' },
  productCard: { background: '#fff', borderRadius: '12px', padding: '12px', boxShadow: '0 0 5px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  productImage: { borderRadius: '8px', marginBottom: '8px', width: '100%', height: 'auto', cursor: 'pointer' },
  productName: { fontSize: '16px', margin: '4px 0' },
  productPrice: { fontSize: '14px', color: '#666', marginBottom: '8px' },
  quantityControls: { display: 'flex', alignItems: 'center', marginBottom: '8px' },
  quantityBtn: { padding: '4px 8px', border: '1px solid #ccc', borderRadius: '50%', cursor: 'pointer', background: '#f0f0f0' },
  quantityVal: { margin: '0 8px', minWidth: '20px', textAlign: 'center' },
  orderBtn: { padding: '8px 12px', border: 'none', borderRadius: '8px', background: '#28a745', color: '#fff', cursor: 'pointer' },
  footer: { marginTop: '24px', textAlign: 'center', fontSize: '12px', color: '#777' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  modalContent: { background: '#fff', borderRadius: '12px', padding: '16px', width: '80%', maxWidth: '320px' },
  modalTitle: { fontSize: '18px', marginBottom: '12px' },
  modalCategories: { display: 'flex', flexWrap: 'wrap', gap: '8px' },
  modalCatItem: { background: '#eee', padding: '8px 12px', borderRadius: '12px', cursor: 'pointer' },
  closeBtn: { marginTop: '16px', width: '100%', padding: '8px', background: '#d9534f', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' },
};
