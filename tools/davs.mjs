

import { v2 as webdav } from 'webdav-server'

const server = new webdav.WebDAVServer({
    port: 1919
});

server.beforeRequest((ctx, next) => {
    ctx.response.setHeader('DAV', '1,2');
    ctx.response.setHeader('Access-Control-Allow-Origin', '*');
    ctx.response.setHeader('Access-Control-Allow-Credentials', 'true');
    ctx.response.setHeader(
      'Access-Control-Allow-Headers',
      '*'
      // 'Authorization, Depth, Content-Type',
    );
    ctx.response.setHeader(
      'Access-Control-Allow-Methods',
      '*'
      // 'PROPPATCH,PROPFIND,OPTIONS,DELETE,UNLOCK,COPY,LOCK,MOVE,HEAD,POST,PUT,GET',
    );
    ctx.response.setHeader(
      'Access-Control-Expose-Headers',
      '*'
      // 'DAV, Content-Length, Allow',
    );
    ctx.response.setHeader('MS-Author-Via', 'DAV');

    next()
});

server.setFileSystem('/', new webdav.PhysicalFileSystem('.'), (success) => {
  server.start(() => console.log('READY: webdav-server'));
})

