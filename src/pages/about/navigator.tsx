import { NavLink } from 'react-router-dom';
import { IItem } from './index';

interface Props {
  items: IItem[]
}

export default function DemoNavi (props: Props) {
  const { items } = props;

  const renderItem = (item: IItem) => (
    <NavLink
      className="menu-item"
      to={`/about/demo-${item.nameEN}`}
      key={item.key}
    >
      { item.nameEN + ' ' + item.nameCN }
    </NavLink>
  )

  return (
    <>
      { items && items.map(renderItem) }
    </>
  )
}