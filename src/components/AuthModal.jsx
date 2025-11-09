import React, { useState } from 'react';

export default function AuthModal({ open, onClose, onAuth }) {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Demo-only local auth; integrate with backend later
      if (mode === 'register' && !name) throw new Error('Nama diperlukan');
      if (!email || !password) throw new Error('Email & kata sandi diperlukan');
      await new Promise(r => setTimeout(r, 600));
      onAuth({ name: name || email.split('@')[0], email });
      onClose();
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-xl border bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{mode === 'login' ? 'Masuk' : 'Daftar'}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-4">
          {mode === 'register' && (
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nama</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="Nama lengkap" />
            </div>
          )}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="email@contoh.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Kata Sandi</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="••••••••" />
          </div>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-500 disabled:opacity-60">
            {loading ? 'Memproses...' : (mode === 'login' ? 'Masuk' : 'Daftar')}
          </button>
        </form>
        <p className="mt-3 text-xs text-gray-600">
          {mode === 'login' ? (
            <>Belum punya akun? <button onClick={() => setMode('register')} className="text-rose-600 hover:underline">Daftar</button></>
          ) : (
            <>Sudah punya akun? <button onClick={() => setMode('login')} className="text-rose-600 hover:underline">Masuk</button></>
          )}
        </p>
      </div>
    </div>
  );
}
