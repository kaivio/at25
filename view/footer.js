import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';

export default function FooterContent({ ...props }){
  return (<div className="flex [&_a]:text-inherit">
    <div className='opacity-75 space-x-4'>
    <Link to='/'> Home </Link>
    <Link to='/about'>About</Link>
    <Link to='/manage'>Manage</Link>

    </div>
    <div className="grow">
    
    </div>
    <div className='text-xs opacity-50'>
    © {new Date().getFullYear()+' '}
    <BrowserOnly fallback={'My Project'}>
      {()=>location.hostname}
    </BrowserOnly>
      <br />
    Built with <Link to='https://docusaurus.io/docs/category/guides'>Docusaurus</Link>
    </div>
  </div>)
}



