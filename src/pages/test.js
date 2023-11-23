import React from 'react';
import Layout from '@theme/Layout';

import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useGlobalData, { usePluginData } from '@docusaurus/useGlobalData';


export default function Hello() {
  return (
    <Layout title="localStorage view" description="__description__" >
      <div className='container mx-auto'>
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          let keys = []
          for (let i = 0; i <= localStorage.length; i++) {
            keys.push(localStorage.key(i))
            // console.log(keys);
          }
          return <>
            {keys.map((k) => (k && <CodeBlock title={k} key={k}>
              {localStorage.getItem(k)}
            </CodeBlock>))}
          </>;
        }}
      </BrowserOnly>
      <button className="button button--warning" 
      onClick={()=>localStorage.clear()}>chear</button>
      </div>
    </Layout>
  );
}
