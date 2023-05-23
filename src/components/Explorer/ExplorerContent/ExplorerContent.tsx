import { ReactElement, lazy } from 'react';
import { useAppSelector } from '@/store/store';

const RootTypes = lazy(() => import('@components/Explorer/RootTypes/RootTypes'));

const Fields = lazy(() => import('@components/Explorer/Fields/Fields'));

type ExplorerItems = {
  name: string;
  component: ReactElement;
};

const explorerItems: ExplorerItems[] = [
  {
    name: 'docs',
    component: <RootTypes />,
  },
  {
    name: 'Query',
    component: <Fields />,
  },
];

const ExplorerContent = () => {
  const { route } = useAppSelector((state) => state.explorer.routes);

  return <>{explorerItems.find((element) => element.name === route)?.component}</>;
};

export default ExplorerContent;
