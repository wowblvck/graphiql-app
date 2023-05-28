import { Typography, Space } from 'antd';
import { useGetGraphQLSchemaQuery } from '@/store/reducers/api/api.reducer';
import { useAppDispatch } from '@/store/store';
import { addRoute } from '@/store/reducers/explorer/explorer.reducer';
import { RightSquareOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ExplorerRoute } from '@/types/explorer-nav.types';
import { OperationTypeNode } from 'graphql';

const { Text, Link } = Typography;

const RootTypes = () => {
  const { t } = useTranslation();
  const { data: schema } = useGetGraphQLSchemaQuery();
  const schemaQueryName = schema?.getQueryType()?.name || null;
  const schemaMutatationName = schema?.getMutationType()?.name || null;
  const dispatch = useAppDispatch();

  return (
    <Space direction="vertical">
      <Text type="secondary">{t('explorer.root.title')}</Text>
      <Space style={{ rowGap: '3px', columnGap: '3px' }}>
        <RightSquareOutlined /> <Text>{t('explorer.root.types')}</Text>
      </Space>
      <Space direction="vertical" style={{ rowGap: '3px', columnGap: '3px' }}>
        {schemaQueryName && (
          <Text>
            <Text type="warning">{t('explorer.root.type.query')}:&nbsp;</Text>
            <Link
              code
              onClick={() =>
                schemaQueryName &&
                dispatch(
                  addRoute({
                    route: ExplorerRoute.Fields,
                    name: schemaQueryName,
                    type: OperationTypeNode.QUERY,
                  })
                )
              }
            >
              {schemaQueryName}
            </Link>
          </Text>
        )}
        {schemaMutatationName && (
          <Text>
            <Text type="warning">{t('explorer.root.type.mutation')}:</Text>
            <Link
              code
              onClick={() =>
                schemaMutatationName &&
                dispatch(
                  addRoute({
                    route: ExplorerRoute.Fields,
                    name: schemaMutatationName,
                    type: OperationTypeNode.MUTATION,
                  })
                )
              }
            >
              {schemaMutatationName}
            </Link>
          </Text>
        )}
      </Space>
    </Space>
  );
};

export default RootTypes;
