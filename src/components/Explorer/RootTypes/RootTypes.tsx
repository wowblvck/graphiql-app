import { Typography, Space } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppDispatch } from '@/store/store';
import { addRoute } from '@/store/reducers/explorer/explorer.reducer';

const { Text, Link } = Typography;

const RootTypes = () => {
  const { data: schema } = useGetGraphQLSchemaQuery();
  const schemaQueryName = schema?.getQueryType()?.name;
  const dispatch = useAppDispatch();

  return (
    <Space direction="vertical">
      <Text>A GraphQL schema provides a root type for each kind of operation</Text>
      <Text>Root Types</Text>
      <Text>
        query:
        <Link target="_blank" onClick={() => dispatch(addRoute(schemaQueryName!))}>
          {schemaQueryName}
        </Link>
      </Text>
    </Space>
  );
};

export default RootTypes;
