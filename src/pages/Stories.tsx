import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const stories = [
  { id: 1, title: 'Осенний сад', genre: 'Лирическая проза', year: 2024, readTime: '8 мин', excerpt: 'Листья падали медленно, словно страницы книги, которую никто не дочитал до конца...' },
  { id: 2, title: 'Письма без адресата', genre: 'Эпистолярный жанр', year: 2024, readTime: '12 мин', excerpt: 'Каждое утро она писала письмо человеку, которого никогда не встречала...' },
  { id: 3, title: 'Старая библиотека', genre: 'Магический реализм', year: 2023, readTime: '15 мин', excerpt: 'Между полками прятались не только книги — здесь жили истории...' },
  { id: 4, title: 'Зимнее утро', genre: 'Зарисовки', year: 2023, readTime: '5 мин', excerpt: 'Мир за окном был ещё не готов просыпаться. Но он уже существовал — тихий и белый...' },
  { id: 5, title: 'Последний поезд', genre: 'Реализм', year: 2023, readTime: '20 мин', excerpt: 'На перроне всегда пахнет прощаниями. Этот запах не спутаешь ни с чем другим...' },
  { id: 6, title: 'Разговор с морем', genre: 'Лирическая проза', year: 2022, readTime: '10 мин', excerpt: 'Море не слушает. Море отвечает. Это разные вещи, которые люди часто путают...' },
  { id: 7, title: 'Старый фотограф', genre: 'Реализм', year: 2022, readTime: '18 мин', excerpt: 'Он снимал не лица — он снимал время, застывшее в выражении глаз...' },
  { id: 8, title: 'Первый снег', genre: 'Зарисовки', year: 2022, readTime: '6 мин', excerpt: 'Снег всегда появляется неожиданно, хотя мы знаем о нём заранее...' },
];

const genres = ['Все', 'Лирическая проза', 'Реализм', 'Магический реализм', 'Эпистолярный жанр', 'Зарисовки'];

export default function Stories() {
  const [activeGenre, setActiveGenre] = useState('Все');
  const [search, setSearch] = useState('');

  const filtered = stories.filter((s) => {
    const matchGenre = activeGenre === 'Все' || s.genre === activeGenre;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchGenre && matchSearch;
  });

  return (
    <Layout>
      <div className="page-fade max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Проза</p>
          <h2 className="font-literary text-5xl text-[var(--ink)] mb-4">Рассказы</h2>
          <div className="divider-ornament">
            <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Поиск по названию или тексту..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[var(--cream)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/50 focus:outline-none focus:border-[var(--sepia-light)] transition-colors"
          />
        </div>

        {/* Genre filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`font-ui text-[9px] tracking-[0.2em] uppercase px-4 py-1.5 border transition-colors ${
                activeGenre === g
                  ? 'border-[var(--sepia)] bg-[var(--sepia)] text-[var(--cream)]'
                  : 'border-[var(--divider)] text-[var(--warm-gray)] hover:border-[var(--sepia-light)] hover:text-[var(--sepia)]'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Stories list */}
        <div className="space-y-6">
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-literary text-2xl text-[var(--warm-gray)] italic">Рассказы не найдены</p>
            </div>
          )}
          {filtered.map((story) => (
            <article
              key={story.id}
              className="group bg-[var(--cream)] border border-[var(--divider)] hover:border-[var(--sepia-light)] transition-colors p-6 md:p-8 cursor-pointer flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-20 flex-shrink-0 text-center md:text-right border-r border-[var(--divider)] pr-6 hidden md:block">
                <p className="font-literary text-3xl text-[var(--sepia)]/30 leading-none">{story.year}</p>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)]">{story.genre}</p>
                  <span className="text-[var(--divider)]">·</span>
                  <p className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/60">{story.readTime} чтения</p>
                </div>
                <h3 className="font-literary text-2xl md:text-3xl text-[var(--ink)] mb-3 group-hover:text-[var(--sepia)] transition-colors">
                  {story.title}
                </h3>
                <p className="font-body text-sm text-[var(--warm-gray)] leading-relaxed mb-4">
                  {story.excerpt}
                </p>
                <button className="font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--sepia)] hover-underline">
                  Читать полностью →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-ui text-[10px] tracking-widest uppercase text-[var(--warm-gray)]/50">
            Показано {filtered.length} из {stories.length} рассказов
          </p>
        </div>
      </div>
    </Layout>
  );
}
