import { Space, Typography } from 'antd';
import { GraphQLField } from 'graphql';
import { FC } from 'react';

const { Paragraph, Title, Link, Text } = Typography;

type QueryMethodsProps = {
  field: GraphQLField<unknown, unknown, unknown> | undefined;
};

const QueryMethods: FC<QueryMethodsProps> = (props) => {
  const { field } = props;
  return (
    <Space direction="vertical" size="small">
      <Title level={3}>{field && field.name}</Title>
      <Text>{field && field.description}</Text>
      <Paragraph>
        <Title level={4}>Types</Title>
        <Link>{field && field.type.toString()}</Link>
      </Paragraph>
      <Paragraph>
        <Title level={4}>Args</Title>
        {field &&
          field.args.map((el) => (
            <Paragraph key={el.name + el.description}>
              {el.name}:<Link key={el.name}>{el.type.toString()}</Link>
            </Paragraph>
          ))}
      </Paragraph>
    </Space>
  );
};

export default QueryMethods;
