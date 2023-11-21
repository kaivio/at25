import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import useGlobalData, { usePluginData } from '@docusaurus/useGlobalData';
import clsx from 'clsx';

export function List({ items }) {
  // const his = useHistory()
  return (<>
    {items.map(({ id, path }) => (
      !['index'].includes(id) &&
      <li key={id}>
        <Link to={path}>{id}</Link>
      </li>
    ))}
  </>)
}

export default function ListDocs({ id, As = List, ...props }) {
  id = id == 'docs' ? undefined : id;
  const data = usePluginData('docusaurus-plugin-content-docs', id);
  const items = data.versions[0].docs
  // const sidebars = data.versions[0].sidebars
  // console.log(data)
  return <As items={items} />
}
