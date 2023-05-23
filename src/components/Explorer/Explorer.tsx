import { Space } from 'antd';
import ExplorerNav from './ExplorerNav/ExplorerNav';
import ExplorerContent from './ExplorerContent/ExplorerContent';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';

const Explorer = () => {
  const { data: schema } = useGetGraphQLSchemaQuery();

  return (
    <>
      {schema && (
        <Space direction="vertical" style={{ width: '100%', padding: '5px', alignSelf: 'start' }}>
          <ExplorerNav />
          <ExplorerContent />
        </Space>
      )}
    </>
  );
};

export default Explorer;
