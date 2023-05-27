import { ReactElement, lazy } from 'react';
import { useAppSelector } from '@/store/store';
import { ExplorerRoute } from '@/types/explorer-nav.types';

const RootTypes = lazy(() => import('@components/Explorer/RootTypes/RootTypes'));
const Fields = lazy(() => import('@components/Explorer/Fields/Fields'));
const FieldProp = lazy(() => import('@components/Explorer/FieldProp/FieldProp'));
const FieldType = lazy(() => import('@components/Explorer/FieldType/FieldType'));
const ArgsType = lazy(() => import('@components/Explorer/ArgsType/ArgsType'));
const EnumType = lazy(() => import('@/components/Explorer/EnumType/EnumType'));
const UnionType = lazy(() => import('@/components/Explorer/UnionType/UnionType'));

type ExplorerItems = {
  name: ExplorerRoute;
  component: ReactElement;
};

const explorerItems: ExplorerItems[] = [
  {
    name: ExplorerRoute.Docs,
    component: <RootTypes />,
  },
  {
    name: ExplorerRoute.Fields,
    component: <Fields />,
  },
  {
    name: ExplorerRoute.FieldProp,
    component: <FieldProp />,
  },
  {
    name: ExplorerRoute.FieldType,
    component: <FieldType />,
  },
  {
    name: ExplorerRoute.ArgsType,
    component: <ArgsType />,
  },
  {
    name: ExplorerRoute.EnumType,
    component: <EnumType />,
  },
  {
    name: ExplorerRoute.UnionType,
    component: <UnionType />,
  },
];

const ExplorerContent = () => {
  const { route } = useAppSelector((state) => state.explorer.routes);

  return <>{explorerItems.find((element) => element.name === route)?.component}</>;
};

export default ExplorerContent;
