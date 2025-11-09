import React from 'react';

const CATEGORIES = [
  { key: 'foods', title: 'Makanan', items: [
    { id: 'ramen', name: 'Tonkotsu Ramen', desc: 'Kuah kaya collagen, chashu, jamur kikurage', price: 78000, img: 'https://images.unsplash.com/photo-1604908176997-431621b6c220?q=80&w=1200&auto=format&fit=crop' },
    { id: 'sushi', name: 'Salmon Nigiri', desc: 'Sushi nasi shari lembut, salmon segar', price: 52000, img: 'https://images.unsplash.com/photo-1604908812224-0a20973088bf?q=80&w=1200&auto=format&fit=crop' },
    { id: 'katsu', name: 'Chicken Katsu', desc: 'Ayam panko goreng, saus tonkatsu', price: 62000, img: 'https://images.unsplash.com/photo-1604908554007-1f6d2f4443a9?q=80&w=1200&auto=format&fit=crop' },
  ]},
  { key: 'drinks', title: 'Minuman', items: [
    { id: 'matcha', name: 'Matcha Latte', desc: 'Uji matcha premium, susu segar', price: 42000, img: 'https://images.unsplash.com/photo-1589476993333-f55b84301219?q=80&w=1200&auto=format&fit=crop' },
    { id: 'hojicha', name: 'Hojicha Latte', desc: 'Roasted green tea, caramel notes', price: 39000, img: 'https://images.unsplash.com/photo-1527161153337-c7e05b74b807?q=80&w=1200&auto=format&fit=crop' },
  ]},
  { key: 'snacks', title: 'Makanan Ringan', items: [
    { id: 'takoyaki', name: 'Takoyaki', desc: 'Bola gurita, katsuobushi, mayo', price: 38000, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
    { id: 'mochi', name: 'Mochi Daifuku', desc: 'Isian kacang merah, tekstur kenyal', price: 32000, img: 'https://images.unsplash.com/photo-1546549039-09d685f43338?q=80&w=1200&auto=format&fit=crop' },
  ]},
];

export default function MenuGrid({ onAdd }) {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Menu Unggulan</h2>
            <p className="mt-1 text-gray-600">Pilih dari makanan, minuman, dan camilan khas Jepang</p>
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {CATEGORIES.map(cat => (
            <div key={cat.key}>
              <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map(item => (
                  <div key={item.id} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">Rp {item.price.toLocaleString('id-ID')}</p>
                        </div>
                      </div>
                      <button onClick={() => onAdd(item)} className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Tambah ke Keranjang</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
