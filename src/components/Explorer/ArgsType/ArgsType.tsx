import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppSelector } from '@/store/store';
import { removeBackquote } from '@/utils/backQuote';
import { Typography } from 'antd';
import { GraphQLScalarType } from 'graphql';
import regexifyString from 'regexify-string';

const { Text } = Typography;

const ArgsType = () => {
  const { data, isSuccess } = useGetGraphQLSchemaQuery();
  const { name } = useAppSelector((state) => state.explorer.routes);
  const argType = isSuccess ? (data?.getType(name) as GraphQLScalarType) : undefined;
  return (
    <Text>
      {regexifyString({
        pattern: /`([^`]+)`/g,
        decorator: (match, index) => {
          return (
            <Text key={`${match}_${index}`} code>
              {removeBackquote(match)}
            </Text>
          );
        },
        input: argType?.description as string,
      })}
    </Text>
  );
};

export default ArgsType;
