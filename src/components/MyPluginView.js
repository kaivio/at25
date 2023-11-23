import React from 'react';
import Layout from '@theme/Layout';

import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useGlobalData, { usePluginData } from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';


export default function MyPluginView({ pages, ...props }) {
  console.log(props);
  return (
    <Layout title="Pages" description="__description__" >
      <div className='container mx-auto py-4'>
        {pages && pages.map((v, i) => (
          <div key={i}>
            <Link to={v.href}>{v.href}</Link>

          </div>
        ))}
      </div>
    </Layout>
  );
}
