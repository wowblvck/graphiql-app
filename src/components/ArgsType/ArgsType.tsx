import { Space, Typography } from 'antd';
import { GraphQLArgument, GraphQLNonNull, GraphQLScalarType } from 'graphql';
import { FC } from 'react';

const { Title, Paragraph } = Typography;

type ArgsTypeProps = {
  arg: GraphQLArgument | undefined;
};

const ArgsType: FC<ArgsTypeProps> = (props) => {
  const { arg } = props;
  const argType = arg && (arg.type as GraphQLNonNull<GraphQLScalarType>);
  // GraphQLField<unknown, unknown, unknown>  GraphQLArgument[]
  console.log(argType?.ofType.name);
  return (
    <Space direction="vertical">
      <Title level={3}>{argType?.ofType.name}</Title>
      <Paragraph>{argType?.ofType.description}</Paragraph>
    </Space>
  );
};

export default ArgsType;
