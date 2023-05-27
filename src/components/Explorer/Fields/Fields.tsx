import { Typography, List, Space } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { addRoute } from '@/store/reducers/explorer/explorer.reducer';
import { ExplorerRoute } from '@/types/explorer-nav.types';
import { withoutBrackets } from '@/utils/brackets';
import TypeLink from '../TypeLink';
import { checkTypes, getLastOfType, getRootTypeFields } from '@/utils/graphQL';
import { OperationTypeNode } from 'graphql';

const { Text, Link } = Typography;

const Fields = () => {
  const { data, isSuccess } = useGetGraphQLSchemaQuery();
  const { type } = useAppSelector((state) => state.explorer.routes);
  let fields;
  if (isSuccess && data) {
    fields = getRootTypeFields(data, type as OperationTypeNode);
  }

  const dispatch = useAppDispatch();

  return (
    <List
      dataSource={fields ? Object.values(fields) : []}
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
              <Typography>
                <Link
                  onClick={() =>
                    dispatch(addRoute({ route: ExplorerRoute.FieldProp, name: item.name, type }))
                  }
                >
                  {item.name}
                </Link>
                {item.args.length > 0 && (
                  <>
                    ({item.args.length >= 2 && <br />}
                    {item.args.map((arg, i) => (
                      <Text key={`${arg.name}_${i}`} style={{ color: 'orange' }}>
                        <Text code>{arg.name}</Text>
                        :&nbsp;
                        <TypeLink
                          code
                          onClick={() =>
                            dispatch(
                              addRoute({
                                route: checkTypes(getLastOfType(arg.type)),
                                name: withoutBrackets(arg.type.toString()),
                              })
                            )
                          }
                        >
                          {arg.type.toString()}
                        </TypeLink>
                        {item.args.length >= 2 && <br />}
                      </Text>
                    ))}
                    )
                  </>
                )}
                :&nbsp;
                <Text style={{ color: 'green' }}>
                  <TypeLink
                    code
                    onClick={() =>
                      dispatch(
                        addRoute({
                          route: checkTypes(getLastOfType(item.type)),
                          name: withoutBrackets(item.type.toString()),
                        })
                      )
                    }
                  >
                    {item.type.toString()}
                  </TypeLink>
                </Text>
              </Typography>
            }
            description={item.description}
          />
        </List.Item>
      )}
    ></List>
  );
};

export default Fields;
