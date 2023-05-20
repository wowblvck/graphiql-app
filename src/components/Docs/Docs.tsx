import { fetchGraphQLSchema } from '@/api/api';
import { Space, Typography } from 'antd';
const { Title, Text, Link } = Typography;

const schema = await fetchGraphQLSchema();

const Docs = () => {
  const schemaQueryName = schema?.getQueryType()?.name;

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Title level={2} style={{ margin: '10px 0 ' }}>
        Docs
      </Title>
      <Text>A GraphQL schema provides a root type for each kind of operation</Text>
      <Text>Root Types</Text>
      <Text>
        query:
        <Link target="_blank">{schemaQueryName}</Link>
      </Text>
    </Space>
  );
};

export default Docs;
