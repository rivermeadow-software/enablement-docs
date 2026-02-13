import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="footer_container">
        <div className="footer__in">
{/* 
        <div class="footer__row__header">
        {links}
<div class="footer__column mobile-hidden"><div class="footer__item"><div class="footer__head"><div class="subtitle-16-sb">Social</div><div class="w-embed"><svg class="footer__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10L12 14L16 10" stroke="#070D18" stroke-opacity="0.7" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></div></div><div class="footer__links"><div class="socials"><a href="https://www.linkedin.com/company/rivermeadow-software" target="_blank" class="socials__link socials__link--linkedin w-inline-block"></a><a href="https://x.com/rivermeadow1" target="_blank" class="socials__link socials__link--x w-inline-block"></a><a href="https://www.facebook.com/rivermeadow/" target="_blank" class="socials__link socials__link--fb w-inline-block"></a><a href="https://www.youtube.com/channel/UCa4nJYZ8h_MSv5zVLuriCbA" target="_blank" class="socials__link socials__link--youtube is-hidden w-inline-block"></a></div></div></div></div>

        </div> */}

          <div className="footer__row footer__row--bottom">
            <div className="footer__col footer__col--left">
              <span>Copyright © {new Date().getFullYear()} RiverMeadow Software, Inc. All rights reserved.</span>
            </div>
            <div className="footer__col footer__col--right">
              <a href="https://docs.rivermeadow.com/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <span className="footer__link-separator">|</span>
              <a href="https://docs.rivermeadow.com" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>
          </div>
      </div>
      </div>
    </footer>
  );
}
