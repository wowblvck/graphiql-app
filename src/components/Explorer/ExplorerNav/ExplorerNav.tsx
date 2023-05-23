import { FC } from 'react';
import { Space, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { removeRoute } from '@/store/reducers/explorer/explorer.reducer';

const { Text, Title } = Typography;

const ExplorerNav: FC = () => {
  const { routes } = useAppSelector((state) => state.explorer);
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(removeRoute());
  };

  return (
    <>
      {!routes.history.length ? (
        <Title level={3} style={{ margin: 0, textTransform: 'capitalize' }}>
          {routes.route}
        </Title>
      ) : (
        <Space direction="vertical">
          <Space onClick={handleBack} style={{ cursor: 'pointer' }}>
            <LeftOutlined />
            <Text style={{ fontSize: '16px', textTransform: 'capitalize' }}>
              {routes.history[routes.history.length - 1]}
            </Text>
          </Space>
          <Title level={3} style={{ margin: 0, textTransform: 'capitalize' }}>
            {routes.route}
          </Title>
        </Space>
      )}
    </>
  );
};

export default ExplorerNav;
