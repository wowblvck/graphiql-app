import { List, Typography, Space } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { PlusCircleOutlined } from '@ant-design/icons';
import { addRoute } from '@/store/reducers/explorer/explorer.reducer';
import TypeLink from '../TypeLink';
import { withoutBrackets } from '@/utils/brackets';
import { checkTypes, getLastOfType, getRootTypeFields } from '@/utils/graphQL';
import { OperationTypeNode } from 'graphql';

const { Text } = Typography;

const FieldProp = () => {
  const { data, isSuccess } = useGetGraphQLSchemaQuery();
  const { type, name } = useAppSelector((state) => state.explorer.routes);
  let fields;
  if (isSuccess && data) {
    fields = getRootTypeFields(data, type as OperationTypeNode);
  }
  const fieldProp = fields && Object.values(fields).find((field) => field.name === name);
  const dispatch = useAppDispatch();
  return (
    <List header={<Text>{fieldProp?.description}</Text>} bordered size="small">
      <List.Item>
        <List.Item.Meta
          title={
            <Space style={{ rowGap: '3px', columnGap: '3px' }}>
              <PlusCircleOutlined />
              <Text>Type</Text>
            </Space>
          }
          description={
            <TypeLink
              code
              onClick={() =>
                fieldProp &&
                dispatch(
                  addRoute({
                    route: checkTypes(getLastOfType(fieldProp.type)),
                    name: withoutBrackets(fieldProp?.type.toString()),
                  })
                )
              }
            >
              {fieldProp?.type.toString()}
            </TypeLink>
          }
        />
      </List.Item>
      {fieldProp && fieldProp?.args.length > 0 && (
        <List.Item>
          <List.Item.Meta
            title={
              <Space style={{ rowGap: '3px', columnGap: '3px' }}>
                <PlusCircleOutlined />
                <Text>Arguments</Text>
              </Space>
            }
            description={
              <Space direction="vertical">
                {fieldProp?.args.map((arg, i) => (
                  <Text key={`${arg.name}_${i}`} style={{ color: 'orange' }}>
                    <Text code key={arg.name}>
                      {arg.name}
                    </Text>
                    :&nbsp;
                    <TypeLink
                      code
                      onClick={() => {
                        dispatch(
                          addRoute({
                            route: checkTypes(getLastOfType(arg.type)),
                            name: withoutBrackets(arg.type.toString()),
                          })
                        );
                      }}
                    >
                      {arg.type.toString()}
                    </TypeLink>
                  </Text>
                ))}
              </Space>
            }
          />
        </List.Item>
      )}
    </List>
  );
};

export default FieldProp;
