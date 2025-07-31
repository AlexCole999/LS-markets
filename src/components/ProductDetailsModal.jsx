import React, { useState } from 'react';

export default function ProductDetailsModal({ onClose }) {
  const gallery = [
    'https://picsum.photos/400/300?random=201',
    'https://picsum.photos/400/300?random=202',
    'https://picsum.photos/400/300?random=203',
    'https://picsum.photos/400/300?random=204',
    'https://picsum.photos/400/300?random=205',
    'https://picsum.photos/400/300?random=206',
  ];

  const [current, setCurrent] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % gallery.length);
  const prev = () => setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length);

  const decrease = () => setQuantity((q) => Math.max(q - 1, 0));
  const increase = () => setQuantity((q) => q + 1);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div style={styles.imageContainer}>
          <img src={gallery[current]} alt="prod" style={styles.image} />
          <button onClick={prev} style={{ ...styles.navBtn, ...styles.navBtnLeft }}>{'❮'}</button>
          <button onClick={next} style={{ ...styles.navBtn, ...styles.navBtnRight }}>{'❯'}</button>
        </div>
        <div style={styles.infoBlock}>
          <p><strong>Цена:</strong> 299₽</p>
          <p><strong>Вес:</strong> 250 г</p>
          <p><strong>Габариты:</strong> 10×15×5 см</p>
        </div>
        <div style={styles.controls}>
          <button onClick={decrease} style={styles.quantityBtn}>-</button>
          <span style={styles.quantityVal}>{quantity}</span>
          <button onClick={increase} style={styles.quantityBtn}>+</button>
        </div>
        <button style={styles.orderBtn}>Заказать</button>
        <div style={styles.footer}>
          <button onClick={onClose} style={styles.closeBtn}>Закрыть</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 9999, padding: '16px'
  },
  modal: {
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    width: '100%',
    maxWidth: '420px',
    textAlign: 'center',
    boxSizing: 'border-box',
    position: 'relative'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: '16px'
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    display: 'block'
  },
  navBtn: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    border: 'none',
    color: '#fff',
    fontSize: '32px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none'
  },
  navBtnLeft: {
    left: 0,
    borderRadius: '8px 0 0 8px'
  },
  navBtnRight: {
    right: 0,
    borderRadius: '0 8px 8px 0'
  },
  infoBlock: {
    textAlign: 'left',
    margin: '16px 0',
    fontSize: '16px',
    lineHeight: '1.5'
  },
  controls: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px'
  },
  quantityBtn: {
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '50%',
    cursor: 'pointer',
    background: '#f0f0f0',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  quantityVal: { margin: '0 12px', minWidth: '20px', textAlign: 'center', fontSize: '16px' },
  orderBtn: {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    background: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '12px'
  },
  footer: { marginTop: '4px' },
  closeBtn: {
    background: '#d9534f', border: 'none',
    borderRadius: '8px', color: '#fff',
    padding: '10px 16px', cursor: 'pointer', fontSize: '16px'
  }
};