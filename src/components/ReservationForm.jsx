import React, { useState } from 'react';
import { Calendar, Users } from 'lucide-react';

export default function ReservationForm({ onReserve }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !date || !time) return;
    onReserve({ name, email, date, time, guests: Number(guests), note });
  };

  return (
    <section id="reserve" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:3xl font-bold tracking-tight">Reservasi Online</h2>
            <p className="mt-2 text-gray-600">Pilih tanggal dan waktu, kami akan menyiapkan meja terbaik untuk Anda.</p>
            <div className="mt-6 p-6 rounded-xl border bg-gradient-to-br from-white to-gray-50">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={18} />
                <p className="text-sm">Buka setiap hari 10.00 - 22.00 WIB</p>
              </div>
              <div className="mt-2 flex items-center gap-3 text-gray-700">
                <Users size={18} />
                <p className="text-sm">Private room tersedia untuk acara khusus</p>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="p-6 rounded-xl border bg-white space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nama</label>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="Nama lengkap" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" placeholder="email@contoh.com" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Tanggal</label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Waktu</label>
                <input type="time" value={time} onChange={e => setTime(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Jumlah Tamu</label>
              <input type="number" min={1} max={20} value={guests} onChange={e => setGuests(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Catatan</label>
              <textarea value={note} onChange={e => setNote(e.target.value)} className="w-full rounded-md border-gray-300 focus:ring-rose-500 focus:border-rose-500" rows={3} placeholder="Preferensi tempat duduk, alergi, dsb." />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Pesan Meja</button>
          </form>
        </div>
      </div>
    </section>
  );
}
