import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--divider)] bg-[var(--cream)]">
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[var(--sepia)] to-transparent" />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center">
          <p className="font-literary text-2xl text-[var(--sepia)] mb-2 italic">
            «Книги — это зеркала: в них видишь только то, что уже несёшь в себе»
          </p>
          <p className="font-ui text-[10px] tracking-[0.2em] text-[var(--warm-gray)] uppercase mb-6">
            Карлос Руис Сафон
          </p>

          <div className="divider-ornament text-[var(--sepia-light)] mb-6">
            <span className="font-literary text-lg">✦</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {[
              { path: '/', label: 'Главная' },
              { path: '/stories', label: 'Рассказы' },
              { path: '/about', label: 'Об авторе' },
              { path: '/contacts', label: 'Контакты' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-ui text-[10px] tracking-[0.2em] uppercase text-[var(--warm-gray)] hover:text-[var(--sepia)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="font-ui text-[10px] tracking-widest text-[var(--warm-gray)]/60 uppercase">
            © {new Date().getFullYear()} · Литературный Мир · Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
