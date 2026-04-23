import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const initialEntries = [
  {
    id: 1,
    name: 'Анна М.',
    date: '15 апреля 2024',
    text: 'Читала «Осенний сад» поздно ночью и не могла остановиться. Спасибо за эту красоту — вы пишете так, будто знаете, что у меня внутри.',
    story: 'Осенний сад',
  },
  {
    id: 2,
    name: 'Дмитрий В.',
    date: '3 марта 2024',
    text: '«Письма без адресата» — лучшее, что я читал за последний год. Очень пронзительно и честно. Буду рекомендовать всем.',
    story: 'Письма без адресата',
  },
  {
    id: 3,
    name: 'Елена К.',
    date: '18 февраля 2024',
    text: 'Случайно попала на сайт и осталась на три часа. Читала один рассказ за другим. Вы — настоящий автор. Продолжайте, пожалуйста!',
    story: null,
  },
];

export default function Guestbook() {
  const [entries, setEntries] = useState(initialEntries);
  const [form, setForm] = useState({ name: '', story: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const newEntry = {
      id: Date.now(),
      name: form.name.trim(),
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
      text: form.text.trim(),
      story: form.story.trim() || null,
    };
    setEntries([newEntry, ...entries]);
    setForm({ name: '', story: '', text: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Layout>
      <div className="page-fade max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Голоса читателей</p>
          <h2 className="font-literary text-5xl text-[var(--ink)] mb-4">Гостевая книга</h2>
          <div className="divider-ornament mb-4">
            <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
          </div>
          <p className="font-body text-base text-[var(--warm-gray)] max-w-xl mx-auto">
            Здесь читатели оставляют свои мысли и впечатления. 
            Ваш отзыв — это подарок, который очень важен для автора.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[var(--cream)] border border-[var(--divider)] p-7 md:p-10 mb-12">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-6">Оставить запись</p>

          {submitted && (
            <div className="mb-6 p-4 border border-[var(--sepia-light)]/40 bg-[var(--sepia)]/5 text-center">
              <p className="font-body text-sm text-[var(--sepia)] italic">Спасибо за ваш отзыв — он очень важен для меня.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--warm-gray)] mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Как вас зовут?"
                  className="w-full bg-[var(--parchment)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--warm-gray)] mb-2">
                  О каком рассказе?
                </label>
                <input
                  type="text"
                  value={form.story}
                  onChange={(e) => setForm({ ...form, story: e.target.value })}
                  placeholder="Название рассказа (необязательно)"
                  className="w-full bg-[var(--parchment)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--warm-gray)] mb-2">
                Ваши впечатления *
              </label>
              <textarea
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                required
                rows={4}
                placeholder="Поделитесь своими мыслями о прочитанном..."
                className="w-full bg-[var(--parchment)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="font-ui text-[10px] tracking-[0.2em] uppercase px-8 py-2.5 bg-[var(--sepia)] text-[var(--cream)] hover:bg-[var(--sepia-dark)] transition-colors"
            >
              Оставить запись
            </button>
          </form>
        </div>

        <div className="divider-ornament mb-10">
          <span className="font-literary text-lg text-[var(--sepia-light)]">✦</span>
        </div>

        {/* Entries */}
        <div className="space-y-6">
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-[var(--sepia-light)] text-center mb-8">
            Записи читателей — {entries.length}
          </p>
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-[var(--cream)] border border-[var(--divider)] p-6 md:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                <div className="flex items-baseline gap-3">
                  <p className="font-literary text-xl text-[var(--ink)]">{entry.name}</p>
                  {entry.story && (
                    <>
                      <span className="text-[var(--divider)]">·</span>
                      <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--sepia-light)]">
                        {entry.story}
                      </p>
                    </>
                  )}
                </div>
                <p className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/50">{entry.date}</p>
              </div>
              <p className="font-body text-base text-[var(--warm-gray)] leading-relaxed italic">
                «{entry.text}»
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
