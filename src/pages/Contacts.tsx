import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Layout>
      <div className="page-fade max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-ui text-[10px] tracking-[0.35em] uppercase text-[var(--sepia-light)] mb-3">Обратная связь</p>
          <h2 className="font-literary text-5xl text-[var(--ink)] mb-4">Контакты</h2>
          <div className="divider-ornament mb-4">
            <span className="font-literary text-xl text-[var(--sepia-light)]">§</span>
          </div>
          <p className="font-body text-base text-[var(--warm-gray)] max-w-lg mx-auto">
            Я рад любому письму — будь то вопрос, предложение о сотрудничестве 
            или просто слова о прочитанном рассказе.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-5">Способы связи</p>
              <div className="space-y-4">
                {[
                  { icon: 'Mail', label: 'Email', value: 'author@example.com' },
                  { icon: 'MessageCircle', label: 'Telegram', value: '@author_name' },
                  { icon: 'BookOpen', label: 'VK', value: 'vk.com/author' },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-start gap-3">
                    <div className="mt-0.5 text-[var(--sepia-light)]">
                      <Icon name={contact.icon} size={16} />
                    </div>
                    <div>
                      <p className="font-ui text-[9px] tracking-widest uppercase text-[var(--warm-gray)]/60 mb-0.5">
                        {contact.label}
                      </p>
                      <p className="font-body text-sm text-[var(--ink)]">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[var(--divider)] pt-6">
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-4">Отвечаю</p>
              <p className="font-body text-sm text-[var(--warm-gray)] leading-relaxed">
                Стараюсь отвечать на все письма в течение нескольких дней. 
                Особенно рад письмам о рассказах.
              </p>
            </div>

            <div className="bg-[var(--cream)] border border-[var(--divider)] p-5">
              <p className="font-literary text-lg text-[var(--sepia)] italic leading-relaxed">
                «Каждое письмо — это маленькая история, которую кто-то решил рассказать»
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--sepia-light)] mb-5">Написать письмо</p>

            {sent && (
              <div className="mb-6 p-4 border border-[var(--sepia-light)]/40 bg-[var(--sepia)]/5 text-center">
                <p className="font-body text-sm text-[var(--sepia)] italic">
                  Письмо отправлено. Большое спасибо — отвечу в ближайшее время.
                </p>
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
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Имя"
                    className="w-full bg-[var(--cream)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--warm-gray)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-[var(--cream)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--warm-gray)] mb-2">
                  Тема письма
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="О чём хотите написать?"
                  className="w-full bg-[var(--cream)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors"
                />
              </div>
              <div>
                <label className="block font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--warm-gray)] mb-2">
                  Сообщение *
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Ваше сообщение..."
                  className="w-full bg-[var(--cream)] border border-[var(--divider)] px-4 py-2.5 font-body text-sm text-[var(--ink)] placeholder-[var(--warm-gray)]/40 focus:outline-none focus:border-[var(--sepia-light)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="font-ui text-[10px] tracking-[0.2em] uppercase px-10 py-3 bg-[var(--sepia)] text-[var(--cream)] hover:bg-[var(--sepia-dark)] transition-colors"
              >
                Отправить письмо
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
