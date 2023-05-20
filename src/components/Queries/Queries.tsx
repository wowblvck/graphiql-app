import { GraphQLField } from 'graphql';
import { FC, useState } from 'react';
import { Typography } from 'antd';
import QueryMethod from '@/components/QueryMethod/QueryMethod';

const { Paragraph, Text, Link } = Typography;

type QueriesPropsType = {
  queries: GraphQLField<unknown, unknown, unknown>[];
};

const Queries: FC<QueriesPropsType> = (props) => {
  const { queries } = props;
  const [isQueryComponentOpen, setIsQueryComponentOpen] = useState(false);
  const [queryField, setQueryFieldy] = useState<GraphQLField<unknown, unknown, unknown>>();
  // GraphQLField<unknown, unknown, unknown>
  return (
    <div>
      {!isQueryComponentOpen ? (
        <>
          {queries &&
            queries.map((queryData) => (
              <div key={queryData.name}>
                <Text
                  style={{ color: 'darkgreen' }}
                  onClick={() => {
                    console.log(queryData.name);
                    setQueryFieldy(queryData);
                    setIsQueryComponentOpen(true);
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
      ) : (
        <QueryMethod field={queryField} />
      )}
    </div>
  );
};

export default Queries;
