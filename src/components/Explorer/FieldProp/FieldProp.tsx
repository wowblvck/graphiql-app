import { Space, Typography } from 'antd';
import { GraphQLArgument, GraphQLField } from 'graphql';
import { FC, useState } from 'react';
import ArgsType from '../ArgsType/ArgsType';
import FieldType from '../FieldType/FieldType';

const { Paragraph, Title, Link, Text } = Typography;

type QueryMethodProps = {
  field: GraphQLField<unknown, unknown, unknown> | undefined;
};

const FieldProp: FC<QueryMethodProps> = (props) => {
  const { field } = props;

  const [arg, setArg] = useState<GraphQLArgument>();
  const [isArgsTypeOpen, setIsArgsTypeOpen] = useState(false);
  const [isFieldTypeOpen, setIsFieldTypeOpen] = useState(false);
  const isTypeComponentOpen = isArgsTypeOpen || isFieldTypeOpen;
  return (
    <Space direction="vertical" size="small">
      {!isTypeComponentOpen ? (
        <>
          <Title level={3}>{field && field.name}</Title>
          <Text>{field && field.description}</Text>
          <Paragraph>
            <Title level={4}>Type</Title>
            <Link onClick={() => setIsFieldTypeOpen(true)}>{field && field.type.toString()}</Link>
          </Paragraph>
          <Paragraph>
            <Title level={4}>Args</Title>
            {field &&
              field.args.map((arg) => (
                <Paragraph key={arg.name + arg.description}>
                  {arg.name}:
                  <Link
                    onClick={() => {
                      setArg(arg);
                      setIsArgsTypeOpen(true);
                    }}
                  >
                    {arg.type.toString()}
                  </Link>
                </Paragraph>
              ))}
          </Paragraph>
        </>
      ) : (
        <>
          {isArgsTypeOpen && <ArgsType arg={arg} />}
          {isFieldTypeOpen && <FieldType />}
        </>
      )}
    </Space>
  );
};

export default FieldProp;
