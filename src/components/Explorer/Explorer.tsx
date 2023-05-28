import { Space, Spin } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { Suspense, lazy } from 'react';

const ExplorerNav = lazy(() => import('@components/Explorer/ExplorerNav/ExplorerNav'));
const ExplorerContent = lazy(() => import('@components/Explorer/ExplorerContent/ExplorerContent'));

const Explorer = () => {
  const { isLoading } = useGetGraphQLSchemaQuery();

  if (isLoading) return <Spin size="large" />;

  return (
    <Suspense fallback={<Spin size="large" />}>
      <Space direction="vertical" style={{ width: '100%', padding: '5px', alignSelf: 'start' }}>
        <ExplorerNav />
        <ExplorerContent />
      </Space>
    </Suspense>
  );
};

export default Explorer;
