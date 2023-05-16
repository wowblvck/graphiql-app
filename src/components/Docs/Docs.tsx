import { queryFetch, fetchGraphQLSchema } from '@/api/api';
import Queries from '@/components/Queries/Queries';
import { Space, Typography } from 'antd';
import { GraphQLField, buildASTSchema, getIntrospectionQuery, parse } from 'graphql';
import { useEffect, useState } from 'react';

const { Title, Text, Link } = Typography;

const Docs = () => {
  const [queryName, setQueryName] = useState('');
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [queries, setQueries] = useState<GraphQLField<unknown, unknown, unknown>[]>();
  useEffect(() => {
    queryFetch(getIntrospectionQuery()).then((data) => {
      console.log(data);
    });
    fetchGraphQLSchema().then((res) => {
      if (res) {
        const schema = buildASTSchema(parse(res));
        const schemaQuery = schema.getQueryType();
        const queryFields = schemaQuery?.getFields();
        // const argType =
        //   queryFields && (queryFields.character.args[0].type as GraphQLNonNull<GraphQLScalarType>);
        // console.log(argType?.ofType);
        // console.log(schemaQuery);
        schemaQuery && setQueryName(schemaQuery?.name);
        queryFields && setQueries(Object.values(queryFields));
        // for (const key in queryFields) {
        // console.log(key, queryFields[key]);
        // }
        // const a = schema.getTypeMap();
        // const fieldType = schema.getType('Character') as GraphQLObjectType<unknown, unknown>;
        // const fieldTypeFields = fieldType.getFields();
        // console.log(a['ID']);
      }
    });
  }, []);
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {!isQueryOpen ? (
        <>
          <Title level={2} style={{ margin: '10px 0 ' }}>
            Docs
          </Title>
          <Text>A GraphQL schema provides a root type for each kind of operation</Text>
          <Text>Root Types</Text>
          <Text>
            query:
            <Link target="_blank" onClick={() => setIsQueryOpen(true)}>
              {queryName}
            </Link>
          </Text>
        </>
      ) : (
        <Queries queries={queries || []} />
      )}
    </Space>
  );
};

export default Docs;
