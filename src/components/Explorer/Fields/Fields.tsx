import { FC } from 'react';
import { Typography } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';

const { Paragraph, Text, Link } = Typography;

const Fields: FC = () => {
  const { data } = useGetGraphQLSchemaQuery();
  const fields = data?.getQueryType()?.getFields();
  console.log(fields);
  return (
    <>
      {fields &&
        Object.values(fields).map((queryData) => (
          <div key={queryData.name}>
            <Text
              style={{ color: 'darkgreen' }}
              onClick={() => {
                console.log(queryData.name);
              }}
            >
              {queryData.name}
            </Text>
            (
            {queryData.args.map((query) => (
              <Text key={query.name}>
                {query.name}:<Link>{query.type.toString()} </Link>
              </Text>
            ))}
            ):<Text style={{ color: 'tomato' }}>{queryData.type.toString()}</Text>
            <Paragraph style={{ fontStyle: 'italic' }}>{queryData.description}</Paragraph>
          </div>
        ))}
    </>
  );
};

export default Fields;
