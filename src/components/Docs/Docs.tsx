import Queries from '@/Queries/Queries';
import { BASE_URL } from '@/constants/settings.config';
import { Space, Typography } from 'antd';
import {
  GraphQLField,
  IntrospectionQuery,
  buildASTSchema,
  buildClientSchema,
  getIntrospectionQuery,
  parse,
  printSchema,
} from 'graphql';
import { useEffect, useState } from 'react';

const { Title, Text, Link } = Typography;

type IntrospectionType = {
  data: IntrospectionQuery;
};

type variablesType = {
  filter: {
    name: string;
  };
};

const fetchGraphQLSchema = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
        operationName: 'IntrospectionQuery',
      }),
    });
    const { data }: IntrospectionType = await response.json();
    const schema = buildClientSchema(data);
    return printSchema(schema);
    // return data;
  } catch (error) {
    console.error(`fetchGraphQLSchema => ${error}`);
  }
};

const queryFetch = async (query: string, variables?: variablesType) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`queryFetch => ${error}`);
  }
};

const Docs = () => {
  const [queryName, setQueryName] = useState('');
  const [isQueryOpen, setIsQueryOpen] = useState(false);
  const [queries, setQueries] = useState<GraphQLField<unknown, unknown, unknown>[]>();
  useEffect(() => {
    queryFetch(getIntrospectionQuery()).then((data) => console.log(data));
    fetchGraphQLSchema().then((res) => {
      if (res) {
        // console.log(res.__schema.types[0].name);
        console.log(buildASTSchema(parse(res)));
        const schema = buildASTSchema(parse(res));
        const schemaQuery = schema.getQueryType();
        const queryFields = schemaQuery?.getFields();
        console.log(queryFields);
        schemaQuery && setQueryName(schemaQuery?.name);
        queryFields && setQueries(Object.values(queryFields));
        // for (const key in queryFields) {
        // console.log(key, queryFields[key]);
        // }
        // const a = schema.getTypeMap();
        // console.log(schema.getType('ID'));
        // console.log(schemaQuery);
        // console.log(queryFields && queryFields.character);
        // console.log(queryFields && queryFields.character.args[0].name);
        // console.log(schemaQuery);
      }
    });
  }, []);
  // console.log(queries);
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
