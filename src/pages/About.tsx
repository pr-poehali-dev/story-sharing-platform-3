import Layout from '@/components/layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="page-fade max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Знакомство</p>
          <h2 className="font-literary text-5xl text-[var(--ink)] mb-4">Об авторе</h2>
          <div className="divider-ornament">
            <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Photo placeholder */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] bg-[var(--cream)] border border-[var(--divider)] flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--sepia)]/10" />
              <span className="text-7xl opacity-30">✍</span>
              <p className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/50 mt-4">
                Фото автора
              </p>
            </div>

            {/* Facts */}
            <div className="mt-6 space-y-3 border border-[var(--divider)] p-5 bg-[var(--cream)]">
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-4">О себе</p>
              {[
                { label: 'Жанры', value: 'Проза, рассказы' },
                { label: 'Стиль', value: 'Лирический реализм' },
                { label: 'Пишу с', value: '2015 года' },
                { label: 'Рассказов', value: '40+' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-baseline border-b border-[var(--divider)]/40 pb-2 last:border-0">
                  <span className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/70">{item.label}</span>
                  <span className="font-body text-sm text-[var(--ink)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <div className="prose-literary">
              <p className="font-literary text-2xl italic text-[var(--sepia)] mb-6 leading-relaxed">
                «Я верю, что в каждом обыкновенном дне скрывается маленькая вечность, 
                которую нужно лишь суметь увидеть»
              </p>

              <p className="font-body text-base text-[var(--warm-gray)] leading-relaxed mb-5">
                Меня зовут [Имя Автора]. Я пишу рассказы — небольшие истории о людях, 
                их внутреннем мире и тех незаметных моментах, которые на самом деле 
                определяют нашу жизнь. Литература для меня — это не профессия, 
                а способ дышать.
              </p>

              <p className="font-body text-base text-[var(--warm-gray)] leading-relaxed mb-5">
                Начал писать более десяти лет назад, когда понял, что некоторые вещи 
                невозможно рассказать иначе как через историю. С тех пор написано 
                несколько десятков рассказов, каждый из которых — попытка поймать 
                что-то неуловимое: запах осени, интонацию прощания, свет в конце 
                длинного коридора.
              </p>

              <p className="font-body text-base text-[var(--warm-gray)] leading-relaxed mb-8">
                Люблю Чехова за точность, Бунина за красоту, Сарояна за нежность. 
                Стараюсь писать просто — о сложном. Буду рад вашим отзывам и мыслям 
                о прочитанном.
              </p>
            </div>

            <div className="divider-ornament mb-8">
              <span className="font-literary text-lg text-[var(--sepia-light)]">✦</span>
            </div>

            {/* Influences */}
            <div>
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-5">Любимые авторы</p>
              <div className="flex flex-wrap gap-3">
                {['А. П. Чехов', 'И. А. Бунин', 'У. Сароян', 'К. Паустовский', 'Ю. Казаков', 'Э. Хемингуэй'].map((author) => (
                  <span
                    key={author}
                    className="font-body text-sm px-4 py-1.5 border border-[var(--divider)] text-[var(--warm-gray)] bg-[var(--cream)] hover:border-[var(--sepia-light)] hover:text-[var(--sepia)] transition-colors"
                  >
                    {author}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
