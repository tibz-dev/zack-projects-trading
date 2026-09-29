import { MessageCircle, Phone } from 'lucide-react';
import { contactLinks } from '../../config/site';
import { content } from '../../data/content';

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-lightgrey bg-white shadow-[0_-8px_24px_rgba(27,31,36,0.12)] lg:hidden">
      <a
        href={contactLinks.phone}
        className="flex min-h-14 items-center justify-center gap-2 border-r border-lightgrey font-bold text-maroon"
      >
        <Phone aria-hidden="true" size={19} /> {content.common.call}
      </a>
      <a
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 font-bold text-maroon"
      >
        <MessageCircle aria-hidden="true" size={19} /> {content.common.whatsapp}
      </a>
    </div>
  );
}
