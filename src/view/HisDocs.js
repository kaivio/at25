import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import useGlobalData, { usePluginData } from '@docusaurus/useGlobalData';
import clsx from 'clsx';

export function List({ items }) {
  // const his = useHistory()
  return (<>
    {items.map(({ title, path }) => (
      !['index'].includes(path) &&
      <li key={title}>
        <Link to={path}>{title}</Link>
      </li>
    ))}
  </>)
}

export default function historyDocs({ id, As = List, ...props }) {
  const item = [{title:'TODO: 需要在Layout组件中跟踪历史记录', path:'/todo'}]
  return <As items={items} />
}
