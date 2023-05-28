import { Space, Spin } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { Suspense, lazy } from 'react';

const ExplorerNav = lazy(() => import('@components/Explorer/ExplorerNav/ExplorerNav'));
const ExplorerContent = lazy(() => import('@components/Explorer/ExplorerContent/ExplorerContent'));

const Explorer = () => {
  const { data: schema } = useGetGraphQLSchemaQuery();

  return (
    <>
      {schema && (
        <Space direction="vertical" style={{ width: '100%', padding: '5px', alignSelf: 'start' }}>
          <ExplorerNav />
          <Suspense
            fallback={
              <Space style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Spin />
              </Space>
            }
          >
            <ExplorerContent />
          </Suspense>
        </Space>
      )}
    </>
  );
};

export default Explorer;
