import Layout from '@/components/layout/Layout';

const picks = [
  {
    id: 1,
    title: 'Осенний сад',
    genre: 'Лирическая проза',
    readTime: '8 мин',
    why: 'Лучшее место для начала. Этот рассказ задаёт тон всему сборнику — негромкий, внимательный, тёплый.',
    mood: 'Для тихого вечера',
    moodColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    id: 2,
    title: 'Письма без адресата',
    genre: 'Эпистолярный жанр',
    readTime: '12 мин',
    why: 'Самый личный из всех рассказов. История об одиночестве, которое однажды получает ответ.',
    mood: 'Для задумчивого настроения',
    moodColor: 'bg-blue-50 text-blue-800 border-blue-200',
  },
  {
    id: 3,
    title: 'Старая библиотека',
    genre: 'Магический реализм',
    readTime: '15 мин',
    why: 'Любимый рассказ читателей. Здесь больше всего тайны — и больше всего свободы для воображения.',
    mood: 'Для любителей магии',
    moodColor: 'bg-purple-50 text-purple-800 border-purple-200',
  },
  {
    id: 4,
    title: 'Последний поезд',
    genre: 'Реализм',
    readTime: '20 мин',
    why: 'Самый длинный и, пожалуй, самый зрелый текст. История о выборе, который делается в последнюю минуту.',
    mood: 'Для долгого чтения',
    moodColor: 'bg-green-50 text-green-800 border-green-200',
  },
];

const thematic = [
  { title: 'Если хочется тепла', stories: ['Осенний сад', 'Первый снег', 'Зимнее утро'] },
  { title: 'Если хочется думать', stories: ['Письма без адресата', 'Последний поезд', 'Старый фотограф'] },
  { title: 'Если мало времени', stories: ['Зарисовки', 'Первый снег', 'Разговор с морем'] },
];

export default function Recommendations() {
  return (
    <Layout>
      <div className="page-fade max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Путеводитель</p>
          <h2 className="font-literary text-5xl text-[var(--ink)] mb-4">Рекомендации</h2>
          <div className="divider-ornament mb-4">
            <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
          </div>
          <p className="font-body text-base text-[var(--warm-gray)] max-w-xl mx-auto">
            Не знаете, с чего начать? Я подобрал лучшие рассказы для разных настроений 
            и ситуаций — пусть выбор будет простым.
          </p>
        </div>

        {/* Editor's picks */}
        <section className="mb-16">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-6 text-center">
            Избранные рассказы
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {picks.map((pick, i) => (
              <article
                key={pick.id}
                className="bg-[var(--cream)] border border-[var(--divider)] hover:border-[var(--sepia-light)] transition-colors p-7 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-1">
                      {pick.genre} · {pick.readTime}
                    </p>
                    <h3 className="font-literary text-2xl text-[var(--ink)] group-hover:text-[var(--sepia)] transition-colors">
                      {pick.title}
                    </h3>
                  </div>
                  <span className="font-literary text-4xl text-[var(--sepia)]/20 font-bold leading-none ml-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="font-body text-sm text-[var(--warm-gray)] leading-relaxed mb-4">
                  {pick.why}
                </p>
                <span className={`inline-block font-ui text-[9px] tracking-[0.2em] uppercase px-3 py-1 border ${pick.moodColor}`}>
                  {pick.mood}
                </span>
              </article>
            ))}
          </div>
        </section>

        <div className="divider-ornament mb-12">
          <span className="font-literary text-lg text-[var(--sepia-light)]">✦</span>
        </div>

        {/* Thematic guides */}
        <section>
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-6 text-center">
            По настроению
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {thematic.map((theme) => (
              <div
                key={theme.title}
                className="bg-[var(--cream)] border border-[var(--divider)] p-6"
              >
                <h4 className="font-literary text-xl text-[var(--ink)] mb-4 italic">{theme.title}</h4>
                <ul className="space-y-2">
                  {theme.stories.map((story) => (
                    <li key={story} className="flex items-center gap-2">
                      <span className="text-[var(--sepia-light)] text-xs">—</span>
                      <span className="font-body text-sm text-[var(--warm-gray)]">{story}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
