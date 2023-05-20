import { Space, Typography } from 'antd';
import { GraphQLArgument } from 'graphql';
import { FC } from 'react';

const { Title } = Typography;

type ArgsTypeProps = {
  arg: GraphQLArgument | undefined;
};

const ArgsType: FC<ArgsTypeProps> = (props) => {
  const { arg } = props;
  const argType = arg && arg.type.toString();
  // GraphQLField<unknown, unknown, unknown>  GraphQLArgument[]
  console.log(argType);
  return (
    <Space direction="vertical">
      <Title level={3}>{argType}</Title>
      {/* <Paragraph>{argType?.ofType.description}</Paragraph> */}
    </Space>
  );
};

export default ArgsType;
