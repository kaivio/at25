import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';

import MDXContent from '@theme/MDXContent'
import FooterContent from '@site/view/footer';


function Footer() {
  const {footer} = useThemeConfig();
  if (!footer) {
    return null;
  }
  // const {copyright, links, logo, style} = footer;
  const style = 'light'
  return (
    <footer
    className={clsx('footer', {
      'footer--dark': style === 'dark',
    })}>
    <div className="container container-fluid">
    <FooterContent/>
    </div>
  </footer>
  );
}
export default React.memo(Footer);
