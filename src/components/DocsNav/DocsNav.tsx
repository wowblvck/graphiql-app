import { FC } from 'react';
import { Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { removeDocsRoute } from '@/store/reducers/graphql/graphql.reducer';

const { Text } = Typography;

const DocsNav: FC = () => {
  const { docsNav } = useAppSelector((state) => state.graphqlSlice);
  const dispatch = useAppDispatch();

  const getNavBack = () => {
    dispatch(removeDocsRoute());
    console.log('getNavBackFunc works');
  };
  return (
    <>
      {docsNav.length > 0 && (
        <Text onClick={getNavBack}>
          <LeftOutlined />
          <Text>{docsNav[docsNav.length - 1]}</Text>
        </Text>
      )}
    </>
  );
};

export default DocsNav;
