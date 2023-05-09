import { Space, Typography } from 'antd';

const { Title, Text, Link } = Typography;

const Docs = () => {
  return (
    <Space direction="vertical">
      <Title level={2}>Docs</Title>
      <Text>A GraphQL schema provides a root type for each kind of operation</Text>
      <Text>Root Types</Text>
      <Text>
        query:
        <Link target="_blank">parsed queryType</Link>
      </Text>
    </Space>
  );
};

export default Docs;
