import React, { useState } from 'react';
import { ShoppingCart, User, LogOut, Menu as MenuIcon } from 'lucide-react';

export default function Navbar({ user, cartCount, onOpenAuth, onLogout, onScrollToCart, onScrollToReserve }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight">Inshoku <span className="text-rose-600">Ten</span></span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-100">和食</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#menu" className="text-sm text-gray-700 hover:text-rose-600 transition">Menu</a>
            <button onClick={onScrollToReserve} className="text-sm text-gray-700 hover:text-rose-600 transition">Reservasi</button>
            <button onClick={onScrollToCart} className="relative inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition">
              <ShoppingCart size={18} />
              Keranjang
              {cartCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold w-5 h-5 rounded-full bg-rose-500 text-white">{cartCount}</span>
              )}
            </button>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">Hi, {user.name}</span>
                <button onClick={onLogout} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-rose-600">
                  <LogOut size={16} /> Keluar
                </button>
              </div>
            ) : (
              <button onClick={onOpenAuth} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200 hover:border-gray-300">
                <User size={18} /> Masuk / Daftar
              </button>
            )}
          </nav>

          {/* Mobile */}
          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
            <MenuIcon size={20} />
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#menu" className="block text-sm text-gray-700">Menu</a>
            <button onClick={() => { setMobileOpen(false); onScrollToReserve(); }} className="block text-left w-full text-sm text-gray-700">Reservasi</button>
            <button onClick={() => { setMobileOpen(false); onScrollToCart(); }} className="relative inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-gray-900 text-white">
              <ShoppingCart size={18} /> Keranjang
              {cartCount > 0 && (
                <span className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold w-5 h-5 rounded-full bg-rose-500 text-white">{cartCount}</span>
              )}
            </button>
            {user ? (
              <button onClick={() => { setMobileOpen(false); onLogout(); }} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200">
                <LogOut size={18} /> Keluar
              </button>
            ) : (
              <button onClick={() => { setMobileOpen(false); onOpenAuth(); }} className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-200">
                <User size={18} /> Masuk / Daftar
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
