import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';

const navLinks = [
  { label: 'Hakkımda', href: '#about' },
  { label: 'Yetenekler', href: '#skills' },
  { label: 'Projeler', href: '#projects' },
  { label: 'İletişim', href: '#contact' },
];

export default function Header({ isDarkMode, onToggleMode }) {
  const modeIcon = isDarkMode ? sunIcon : moonIcon;

  return (
    <header className="border-b border-[#1E2329]/5 bg-[#FFFFFB]/90 backdrop-blur transition-colors duration-300 ease-in-out dark:border-white/5 dark:bg-[#1E2329]/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a
          href="#home"
          className="text-base font-semibold tracking-tight text-[#1E2329] transition-colors duration-300 ease-in-out hover:text-[#FCD535] dark:text-white"
        >
          Yavuz Selim Muşmul
        </a>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <nav aria-label="Ana menü">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#1E2329]/70 dark:text-white/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 ease-in-out hover:text-[#1E2329] focus:outline-none focus:ring-2 focus:ring-[#FCD535] focus:ring-offset-4 dark:hover:text-white dark:focus:ring-offset-[#1E2329]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={onToggleMode}
            className="group inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent text-[#1E2329] transition-colors duration-300 ease-in-out hover:text-[#FCD535] focus:outline-none dark:text-white dark:hover:text-[#FCD535]"
            aria-label={isDarkMode ? 'Açık moda geç' : 'Koyu moda geç'}
            title={isDarkMode ? 'Açık moda geç' : 'Koyu moda geç'}
          >
            <span
              aria-hidden="true"
              className="h-5 w-5 bg-current transition-colors duration-300 ease-in-out"
              style={{
                WebkitMask: `url(${modeIcon}) center / contain no-repeat`,
                mask: `url(${modeIcon}) center / contain no-repeat`,
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
