import { fetchGraphQLSchema } from '@/api/api';
import Queries from '@/components/Queries/Queries';
// import { useAppDispatch, useAppSelector } from '@/store/store';
// import { useGetGraphQLQuery, useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { Space, Typography } from 'antd';
import { GraphQLField, buildASTSchema, parse } from 'graphql';
import { useEffect, useState } from 'react';
// import { setSchema } from '@/store/reducers/graphql/graphql.reducer';
// import Paragraph from 'antd/es/skeleton/Paragraph';
// import { LeftOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;
// const query = `query findChar($filter: FilterCharacter) {
//       characters(filter: $filter) {
//       info {
//         count
//       }
//       results {
//         name,
//         id
//       }
//     }
//   }`;
// const variables = { filter: { name: 'ants' } };

const Docs = () => {
  const [queryName, setQueryName] = useState('');
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [queries, setQueries] = useState<GraphQLField<unknown, unknown, unknown>[]>();
  // const [docsNav, setDocsNav] = useState<string[]>([]);
  //redux api func
  // const dispatch = useAppDispatch();
  // const schema = useAppSelector((state) => state.graphqlSlice.schema);
  // const { data } = useGetGraphQLSchemaQuery();
  //  const { data } = useGetGraphQLQuery({ query, variables });
  // console.log(data);

  // const updateSchema = (introspection: IntrospectionQuery, dispatch) => {
  //   const builtSchema = buildClientSchema(introspection);
  //   const schema = buildASTSchema(parse(printSchema(builtSchema)));
  //   //  printSchema(schema);
  //   dispatch(setSchema(schema));
  // };

  useEffect(() => {
    // if (data) updateSchema(data, dispatch);
    fetchGraphQLSchema().then((res) => {
      if (res) {
        const schema = buildASTSchema(parse(res));
        const schemaQuery = schema.getQueryType();
        const queryFields = schemaQuery?.getFields();
        console.log(schemaQuery);
        schemaQuery && setQueryName(schemaQuery?.name);
        queryFields && setQueries(Object.values(queryFields));
        // for (const key in queryFields) {
        //   console.log(key, queryFields[key]);
        // }
        // const a = schema.getTypeMap();
        // const fieldType = schema.getType('Character') as GraphQLObjectType<unknown, unknown>;
        const fieldType = schema.getType('FilterLocation');
        // const fieldTypeFields = fieldType.getFields();
        console.log(fieldType);
        // const argType =
        //   queryFields && (queryFields.character.args[0].type as GraphQLNonNull<GraphQLScalarType>);
        // console.log(argType?.ofType);
      }
    });
  }, []);

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      {!isQueryOpen ? (
        <>
          {/* {docsNav.length > 0  && (<Paragraph>
            <LeftOutlined />
            <Text>{docsNav[length - 1]}</Text>
            <Paragraph>)} */}
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
