import { fetchGraphQLSchema } from '@/api/api';
import { addDocsRoute } from '@/store/reducers/graphql/graphql.reducer';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { Space, Typography } from 'antd';
const { Title, Text, Link } = Typography;

const schema = await fetchGraphQLSchema();

const Docs = () => {
  const schemaQueryName = schema?.getQueryType()?.name;
  const dispatch = useAppDispatch();
  const { docsNav } = useAppSelector((state) => state.graphqlSlice);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {docsNav.length === 0 ? (
        <>
          <Title level={2} style={{ margin: '10px 0 ' }}>
            Docs
          </Title>
          <Text>A GraphQL schema provides a root type for each kind of operation</Text>
          <Text>Root Types</Text>
          <Text>
            query:
            <Link target="_blank" onClick={() => dispatch(addDocsRoute('Docs'))}>
              {schemaQueryName}
            </Link>
          </Text>
        </>
      ) : (
        <h2>Should be Queries Component</h2>
      )}
    </Space>
  );
};

export default Docs;
