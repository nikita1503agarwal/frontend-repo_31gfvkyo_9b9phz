import React, { useMemo, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import CartCheckout from './components/CartCheckout';
import ReservationForm from './components/ReservationForm';
import AuthModal from './components/AuthModal';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const cartRef = useRef(null);
  const reserveRef = useRef(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [toast, setToast] = useState('');

  const cartCount = useMemo(() => cart.length, [cart]);

  const handleAdd = (item) => {
    setCart(prev => [...prev, item]);
    setToast(`${item.name} ditambahkan`);
    setTimeout(() => setToast(''), 1500);
  };
  const handleRemove = (idx) => setCart(prev => prev.filter((_, i) => i !== idx));
  const handleClear = () => setCart([]);
  const handleCheckout = async (payload) => {
    // Demo: simulate payment intent creation
    setToast('Pesanan dibuat. Silakan selesaikan pembayaran di kasir.');
    setCart([]);
  };
  const handleReserve = async (data) => {
    setToast(`Reservasi untuk ${data.guests} tamu pada ${data.date} ${data.time} diterima`);
  };

  const scrollToCart = () => {
    document.getElementById('cart')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToReserve = () => {
    document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' });
  };

  const onLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        user={user}
        cartCount={cartCount}
        onOpenAuth={() => setAuthOpen(true)}
        onLogout={onLogout}
        onScrollToCart={scrollToCart}
        onScrollToReserve={scrollToReserve}
      />
      <main>
        <Hero />
        <MenuGrid onAdd={handleAdd} />
        <ReservationForm onReserve={handleReserve} />
        <CartCheckout items={cart} onRemove={handleRemove} onClear={handleClear} onCheckout={handleCheckout} />
      </main>

      {authOpen && (
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onAuth={(u) => setUser(u)} />
      )}

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-gray-900 text-white text-sm shadow-lg">
          {toast}
        </div>
      )}

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Inshoku Ten • Cita rasa Jepang yang otentik
        </div>
      </footer>
    </div>
  );
}

export default App;
