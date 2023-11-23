import { createClient } from "webdav";

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import BrowserOnly from "@docusaurus/BrowserOnly";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function PlayDav({ ...props }) {

  const [contents, setContents] = useState([])


  useEffect(() => {
    const url = new URL('/', document.location)
    url.port = '1919'
    
    const client = createClient(url.toString());
    // Get directory contents

    client.getDirectoryContents("/").then(res => {
      console.log(res)
      setContents(res)
    }).catch(err => {
      console.log(e)

    })

  }, [])

  return (<Layout>
    <div>
      {contents.map((v, i) => (
        <div key={i}>
          {{file:'📄', directory:'📂'}[v.type] || '🗄️'}
          {v.filename}
          </div>
      ))}
    </div>

  </Layout>)
}


export function PlayDav2({ ...props }) {
  return (<Layout>
    <BrowserOnly>
      {() => {
        const [contents, setContents] = useState([])

        const lo = document.location
        const url = new URL('/', document.location)
        url.port = '1919'
        useEffect(async () => {
          try {
            const client = createClient(url, {
              username: 'root',
              password: '123'
            });
            // Get directory contents
            const directoryItems = await client.getDirectoryContents("/");
            console.log(directoryItems)
            setContents(directoryItems)
          } catch (e) {
            console.log(e)
          }

        }, [])
        return (<>
          aa
          <ul>
            {contents.map((v, i) => {
              <li></li>
            })}
          </ul>
        </>)
      }}
    </BrowserOnly>
  </Layout>)
}




