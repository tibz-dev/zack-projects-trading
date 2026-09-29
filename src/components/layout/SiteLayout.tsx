import { Outlet } from 'react-router-dom';
import { content } from '../../data/content';
import { Footer } from './Footer';
import { Header } from './Header';
import { MobileContactBar } from './MobileContactBar';

export function SiteLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-offwhite">
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[100] -translate-y-24 rounded-md bg-yellow px-4 py-2 font-bold text-ink transition-transform focus:translate-y-0"
      >
        {content.common.skipToContent}
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
