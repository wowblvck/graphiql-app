import { Space, Typography } from 'antd';

const { Title, Text } = Typography;

const Docs = () => {
  return (
    <Space className="docs" direction="vertical">
      <Title level={2} className="docs__title">
        Docs
      </Title>
      <Text className="docs__description">
        A GraphQL schema provides a root type for each kind of operation
      </Text>
      <Text className="">Root Types</Text>
      <Text className="">query:</Text>
    </Space>
  );
};

export default Docs;
