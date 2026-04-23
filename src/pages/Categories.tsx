import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const categories = [
  {
    name: 'Лирическая проза',
    icon: '🌿',
    count: 12,
    description: 'Истории, в которых настроение важнее сюжета. Красота момента, тихая грусть и радость.',
  },
  {
    name: 'Реализм',
    icon: '🏙',
    count: 9,
    description: 'Рассказы о реальной жизни — без прикрас, но с теплотой и вниманием к деталям.',
  },
  {
    name: 'Магический реализм',
    icon: '✨',
    count: 6,
    description: 'Там, где обыденное переплетается с чудесным, а граница между ними едва уловима.',
  },
  {
    name: 'Эпистолярный жанр',
    icon: '✉️',
    count: 5,
    description: 'Письма, дневники и записки — особый разговор, в котором можно сказать главное.',
  },
  {
    name: 'Зарисовки',
    icon: '🖊',
    count: 8,
    description: 'Короткие впечатления от встреч, мест и мгновений. Проза-миниатюра.',
  },
  {
    name: 'Городские истории',
    icon: '🌃',
    count: 7,
    description: 'Жизнь большого города глазами внимательного наблюдателя.',
  },
];

export default function Categories() {
  return (
    <Layout>
      <div className="page-fade max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Навигация</p>
          <h2 className="font-literary text-5xl text-[var(--ink)] mb-4">Категории</h2>
          <div className="divider-ornament mb-4">
            <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
          </div>
          <p className="font-body text-base text-[var(--warm-gray)] max-w-xl mx-auto">
            Рассказы распределены по жанрам и настроению — выберите то, что ближе вам прямо сейчас.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/stories"
              className="group bg-[var(--cream)] border border-[var(--divider)] hover:border-[var(--sepia-light)] transition-colors p-7 block"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-literary text-xl text-[var(--ink)] group-hover:text-[var(--sepia)] transition-colors">
                  {cat.name}
                </h3>
                <span className="font-ui text-[9px] tracking-widest uppercase text-[var(--sepia-light)] border border-[var(--sepia-light)]/30 px-2 py-0.5">
                  {cat.count}
                </span>
              </div>
              <p className="font-body text-sm text-[var(--warm-gray)] leading-relaxed">
                {cat.description}
              </p>
              <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--sepia)] mt-4 group-hover:opacity-80">
                Читать →
              </p>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14 pt-10 border-t border-[var(--divider)] grid grid-cols-3 gap-8 text-center">
          {[
            { num: '40+', label: 'Рассказов' },
            { num: '6', label: 'Категорий' },
            { num: '10+', label: 'Лет творчества' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-literary text-5xl text-[var(--sepia)] mb-1">{stat.num}</p>
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--warm-gray)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
