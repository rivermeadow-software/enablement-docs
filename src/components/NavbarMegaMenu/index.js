import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

// Stroke icons (24x24 viewBox) keyed by the `icon` name used in docusaurus.config.js.
const icons = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  cloud: <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4.25 4.25 0 0 1-.5 8.5z" />,
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 21V5" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] ?? icons.book}
    </svg>
  );
}

function MobileMegaMenu({ label, sections }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <li className={clsx('menu__list-item', !expanded && 'menu__list-item--collapsed')}>
      <button
        type="button"
        className="menu__link menu__link--sublist menu__link--sublist-caret clean-btn"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
        style={{ width: '100%', textAlign: 'left' }}
      >
        {label}
      </button>
      {expanded && (
        <ul className="menu__list">
          {sections.map(section => (
            <React.Fragment key={section.title}>
              <li className={styles.mobileSectionTitle}>{section.title}</li>
              {section.items.map(item => (
                <li key={item.to} className="menu__list-item">
                  <Link className="menu__link" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function NavbarMegaMenu({ label, sections = [], activeBasePath, mobile }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  // Close after navigating, on Escape, and on clicks outside the menu.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => e.key === 'Escape' && setOpen(false);
    const onClick = e => ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  if (mobile) {
    return <MobileMegaMenu label={label} sections={sections} />;
  }

  const active = activeBasePath && pathname.startsWith(activeBasePath);

  return (
    <div
      ref={ref}
      className={clsx('navbar__item', styles.megaMenu)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={clsx('navbar__link clean-btn', styles.trigger, active && 'navbar__link--active')}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {label}
        <span className={clsx(styles.chevron, open && styles.chevronOpen)} aria-hidden="true" />
      </button>
      <div className={clsx(styles.panelWrapper, open && styles.panelWrapperOpen)}>
        <div className={styles.panel}>
          {sections.map((section, index) => (
            <section
              key={section.title}
              className={clsx(styles.section, index > 0 && styles.sectionAccent)}
              style={{ '--mega-columns': section.columns ?? 1 }}
            >
              <div className={styles.sectionTitle}>{section.title}</div>
              <ul className={styles.items}>
                {section.items.map(item => (
                  <li key={item.to}>
                    <Link className={styles.item} to={item.to} onClick={() => setOpen(false)}>
                      <span className={styles.icon}>
                        <Icon name={item.icon} />
                      </span>
                      <span className={styles.itemText}>
                        <span className={styles.itemLabel}>{item.label}</span>
                        {item.description && (
                          <span className={styles.itemDescription}>{item.description}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
