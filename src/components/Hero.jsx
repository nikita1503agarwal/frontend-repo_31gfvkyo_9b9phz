import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9G7XxTgujC9mQdB9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">Authentic Washoku</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">Inshoku Ten</h1>
            <p className="mt-4 text-lg text-gray-700">Restoran Jepang modern yang menghadirkan pengalaman rasa asli Jepang. Temukan ramen hangat, sushi segar, wagashi manis, dan matcha premium dalam satu tempat.</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#menu" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-rose-600 text-white hover:bg-rose-500">Lihat Menu</a>
              <a href="#reserve" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 hover:bg-gray-50">Reservasi</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
