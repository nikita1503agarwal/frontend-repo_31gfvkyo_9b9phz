import React, { useMemo, useState } from 'react';
import { CreditCard, Trash2 } from 'lucide-react';

export default function CartCheckout({ items, onRemove, onClear, onCheckout }) {
  const [note, setNote] = useState('');
  const total = useMemo(() => items.reduce((sum, it) => sum + (it.price || 0), 0), [items]);

  return (
    <section id="cart" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Keranjang & Pembayaran</h2>
            <p className="mt-1 text-gray-600">Periksa pesanan Anda lalu lanjutkan ke pembayaran</p>
          </div>
          {items.length > 0 && (
            <button onClick={onClear} className="text-sm text-rose-600 hover:text-rose-700">Bersihkan Keranjang</button>
          )}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            {items.length === 0 ? (
              <div className="p-6 rounded-xl border border-dashed text-center text-gray-600">Keranjang kosong</div>
            ) : items.map((it, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border bg-white">
                <img src={it.img} alt={it.name} className="w-20 h-16 object-cover rounded" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{it.name}</p>
                  <p className="text-sm text-gray-600">Rp {it.price.toLocaleString('id-ID')}</p>
                </div>
                <button onClick={() => onRemove(idx)} className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 p-6 rounded-xl border bg-white h-fit sticky top-24">
            <h3 className="font-semibold">Ringkasan</h3>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>Rp {total.toLocaleString('id-ID')}</span></div>
              <div className="flex justify-between"><span>Pajak (10%)</span><span>Rp {(total * 0.1).toLocaleString('id-ID')}</span></div>
              <div className="flex justify-between font-semibold"><span>Total</span><span>Rp {(total * 1.1).toLocaleString('id-ID')}</span></div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-700 mb-1">Catatan</label>
              <textarea value={note} onChange={e => setNote(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" rows={3} placeholder="Tingkat pedas, alergi, dsb." />
            </div>
            <button onClick={() => onCheckout({ items, note, total: Math.round(total * 1.1) })} className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-rose-600 text-white hover:bg-rose-500">
              <CreditCard size={18} /> Bayar Sekarang
            </button>
            <p className="mt-2 text-xs text-gray-500">Pembayaran demo: pesanan akan disimpan dan ditandai "unpaid".</p>
          </div>
        </div>
      </div>
    </section>
  );
}
