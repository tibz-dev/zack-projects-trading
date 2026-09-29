import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { contactLinks } from '../../config/site';
import { content } from '../../data/content';
import { navigation } from '../../data/navigation';
import { Logo } from './Logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate text-white">
      <div className="site-container flex min-h-20 items-center justify-between gap-4">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={content.common.primaryNavigation}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-white/10 text-yellow' : 'text-white hover:bg-white/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href={contactLinks.phone}
          className="hidden min-h-11 items-center gap-2 rounded-md bg-maroon px-4 py-2 text-sm font-bold text-white hover:bg-maroon/90 lg:inline-flex"
        >
          <Phone aria-hidden="true" size={18} /> {content.common.call}
        </a>

        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-md border border-white/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? content.common.closeMenu : content.common.openMenu}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-slate lg:hidden"
          aria-label={content.common.mobileNavigation}
        >
          <div className="site-container flex flex-col py-3">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `flex min-h-12 items-center rounded-md px-3 text-base font-semibold ${
                    isActive ? 'bg-white/10 text-yellow' : 'text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
