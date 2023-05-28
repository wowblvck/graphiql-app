import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppSelector } from '@/store/store';
import { PlusCircleOutlined } from '@ant-design/icons';
import { List, Space, Typography } from 'antd';
import { GraphQLEnumType } from 'graphql';

const { Text } = Typography;

const EnumType = () => {
  const { data, isSuccess } = useGetGraphQLSchemaQuery();
  const { name } = useAppSelector((state) => state.explorer.routes);
  const enumTypes = isSuccess ? (data?.getType(name) as GraphQLEnumType) : undefined;
  return (
    <List
      dataSource={enumTypes && Object.values(enumTypes.getValues())}
      header={
        <Space style={{ rowGap: '3px', columnGap: '3px' }}>
          <PlusCircleOutlined /> <Text>Enums</Text>
        </Space>
      }
      bordered
      size="small"
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={<Text>{item.value}</Text>} description={item.description} />
        </List.Item>
      )}
    ></List>
  );
};

export default EnumType;
