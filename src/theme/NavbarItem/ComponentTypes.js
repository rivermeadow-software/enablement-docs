import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import NavbarMegaMenu from '@site/src/components/NavbarMegaMenu';

// Registers `type: 'custom-megaMenu'` for use in docusaurus.config.js navbar items.
export default {
  ...ComponentTypes,
  'custom-megaMenu': NavbarMegaMenu,
};
