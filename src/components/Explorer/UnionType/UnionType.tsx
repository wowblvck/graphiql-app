import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { PlusCircleOutlined } from '@ant-design/icons';
import { List, Space, Typography } from 'antd';
import { GraphQLUnionType } from 'graphql';
import TypeLink from '../TypeLink';
import { addRoute } from '@/store/reducers/explorer/explorer.reducer';
import { ExplorerRoute } from '@/types/explorer-nav.types';

const { Text } = Typography;

const UnionType = () => {
  const { data, isSuccess } = useGetGraphQLSchemaQuery();
  const { name } = useAppSelector((state) => state.explorer.routes);
  const unionType = isSuccess ? (data?.getType(name) as GraphQLUnionType) : undefined;
  const dispatch = useAppDispatch();

  return (
    <>
      {unionType && (
        <List
          dataSource={[...unionType.getTypes()]}
          header={
            <Space style={{ rowGap: '3px', columnGap: '3px' }}>
              <PlusCircleOutlined /> <Text>Possible Types</Text>
            </Space>
          }
          bordered
          size="small"
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Typography.Text style={{ color: 'green' }}>
                    <TypeLink
                      onClick={() => {
                        item &&
                          dispatch(
                            addRoute({
                              route: ExplorerRoute.FieldType,
                              name: item.name,
                            })
                          );
                      }}
                    >
                      {item.name}
                    </TypeLink>
                  </Typography.Text>
                }
                description={item.description}
              />
            </List.Item>
          )}
        ></List>
      )}
    </>
  );
};

export default UnionType;
