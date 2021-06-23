import { Route } from 'react-router-dom';
import { IItem } from './index';

interface Props {
  items: IItem[]
}

export default function DemoRoutes (props: Props) {
  const { items } = props;

  const renderItem = (item: IItem) => {
    return (
      <Route
        path={`/about/demo-${item.nameEN}`}
        key={item.key}
        component={item.component}
      />
    )
  }

  return (
    <Route path="/about">
      { items && items.map(renderItem) }
    </Route>
  )
}