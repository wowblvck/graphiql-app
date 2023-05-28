import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { PlusCircleOutlined } from '@ant-design/icons';
import { List, Space, Typography } from 'antd';
import { GraphQLObjectType } from 'graphql';
import TypeLink from '../TypeLink';
import { addRoute } from '@/store/reducers/explorer/explorer.reducer';
import { withoutBrackets } from '@/utils/brackets';
import { checkTypes, getLastOfType } from '@/utils/graphQL';

const { Text } = Typography;

const FieldType = () => {
  const { data, isSuccess } = useGetGraphQLSchemaQuery();
  const { name } = useAppSelector((state) => state.explorer.routes);
  const fieldTypes = isSuccess ? (data?.getType(name) as GraphQLObjectType) : undefined;
  const dispatch = useAppDispatch();

  return (
    <List
      dataSource={fieldTypes && Object.values(fieldTypes.getFields())}
      header={
        <Space style={{ rowGap: '3px', columnGap: '3px' }}>
          <PlusCircleOutlined /> <Text>Fields</Text>
        </Space>
      }
      bordered
      size="small"
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={
              <Typography.Text style={{ color: 'green' }}>
                <Text>{item.name}</Text>
                :&nbsp;
                <TypeLink
                  code
                  onClick={() => {
                    item &&
                      dispatch(
                        addRoute({
                          route: checkTypes(getLastOfType(item.type)),
                          name: withoutBrackets(item.type.toString()),
                        })
                      );
                  }}
                >
                  {item.type.toString()}
                </TypeLink>
              </Typography.Text>
            }
            description={item.description}
          />
        </List.Item>
      )}
    ></List>
  );
};

export default FieldType;
