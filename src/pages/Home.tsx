import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const featuredStories = [
  {
    id: 1,
    title: 'Осенний сад',
    genre: 'Лирическая проза',
    excerpt: 'Листья падали медленно, словно страницы книги, которую никто не дочитал до конца. В этом саду время текло иначе — тягуче и нежно...',
    readTime: '8 мин',
  },
  {
    id: 2,
    title: 'Письма без адресата',
    genre: 'Эпистолярный жанр',
    excerpt: 'Каждое утро она писала письмо человеку, которого никогда не встречала. Но однажды пришёл ответ...',
    readTime: '12 мин',
  },
  {
    id: 3,
    title: 'Старая библиотека',
    genre: 'Магический реализм',
    excerpt: 'Между полками прятались не только книги — здесь жили истории, которые никто ещё не написал, но которые уже ждали своего часа...',
    readTime: '15 мин',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="page-fade">
        {/* Hero */}
        <section className="relative py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] to-transparent pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6">
            <p className="font-ui text-[10px] tracking-[0.4em] uppercase text-[var(--sepia-light)] mb-6">
              ✦ Добро пожаловать ✦
            </p>
            <h2 className="font-literary text-5xl md:text-7xl text-[var(--ink)] leading-tight mb-6" style={{ fontStyle: 'italic' }}>
              Место, где<br />слова обретают жизнь
            </h2>
            <div className="divider-ornament my-6">
              <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
            </div>
            <p className="font-body text-lg text-[var(--warm-gray)] leading-relaxed max-w-xl mx-auto mb-10">
              Здесь собраны рассказы, рождённые из тихих наблюдений за миром. 
              Истории о людях, мгновениях и чувствах, которые сложно выразить словами — 
              но именно это мы и попытаемся сделать.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/stories"
                className="inline-block px-10 py-3 bg-[var(--sepia)] text-[var(--cream)] font-ui text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--sepia-dark)] transition-colors"
              >
                Читать рассказы
              </Link>
              <Link
                to="/about"
                className="inline-block px-10 py-3 border border-[var(--sepia)] text-[var(--sepia)] font-ui text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--sepia)]/10 transition-colors"
              >
                Об авторе
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="divider-ornament">
            <span className="font-literary text-[var(--sepia-light)] text-lg">✦</span>
          </div>
        </div>

        {/* Featured stories */}
        <section className="py-16 max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Избранное</p>
            <h3 className="font-literary text-4xl text-[var(--ink)]">Последние рассказы</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <article
                key={story.id}
                className="group bg-[var(--cream)] border border-[var(--divider)] p-6 hover:border-[var(--sepia-light)] transition-colors cursor-pointer"
              >
                <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-3">
                  {story.genre}
                </p>
                <h4 className="font-literary text-2xl text-[var(--ink)] mb-3 group-hover:text-[var(--sepia)] transition-colors">
                  {story.title}
                </h4>
                <p className="font-body text-sm text-[var(--warm-gray)] leading-relaxed mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/60">
                    {story.readTime} чтения
                  </span>
                  <Link
                    to="/stories"
                    className="font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--sepia)] hover-underline"
                  >
                    Читать →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/stories"
              className="font-ui text-[10px] tracking-[0.25em] uppercase text-[var(--sepia)] hover-underline"
            >
              Все рассказы →
            </Link>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="divider-ornament">
            <span className="font-literary text-[var(--sepia-light)] text-lg">✦</span>
          </div>
        </div>

        {/* About teaser */}
        <section className="py-16 max-w-3xl mx-auto px-6 text-center">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-4">Об авторе</p>
          <p className="font-body text-xl text-[var(--warm-gray)] leading-relaxed mb-6 italic">
            «Я пишу, потому что не умею молчать о том, что чувствую. 
            Слова — мой способ понять этот странный и прекрасный мир.»
          </p>
          <Link
            to="/about"
            className="font-ui text-[10px] tracking-[0.25em] uppercase text-[var(--sepia)] hover-underline"
          >
            Узнать больше →
          </Link>
        </section>

        {/* Sections overview */}
        <section className="py-16 bg-[var(--cream)] border-t border-b border-[var(--divider)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Навигация</p>
              <h3 className="font-literary text-4xl text-[var(--ink)]">Разделы сайта</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { path: '/categories', icon: '📚', label: 'Категории', desc: 'По жанрам и темам' },
                { path: '/recommendations', icon: '⭐', label: 'Рекомендации', desc: 'Избранные рассказы' },
                { path: '/guestbook', icon: '✒️', label: 'Гостевая книга', desc: 'Отзывы читателей' },
                { path: '/contacts', icon: '✉️', label: 'Контакты', desc: 'Связаться со мной' },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-center p-5 border border-[var(--divider)] hover:border-[var(--sepia-light)] hover:bg-[var(--parchment)] transition-all group"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-literary text-lg text-[var(--ink)] group-hover:text-[var(--sepia)] transition-colors mb-1">
                    {item.label}
                  </p>
                  <p className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/70">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
