import { FC } from 'react';
import { Space, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { removeRoute } from '@/store/reducers/explorer/explorer.reducer';

const { Title, Link } = Typography;

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
          {routes.name}
        </Title>
      ) : (
        <Space direction="vertical">
          <Space onClick={handleBack} style={{ cursor: 'pointer' }}>
            <LeftOutlined />
            <Link style={{ fontSize: '16px' }}>
              {routes.history[routes.history.length - 1].name}
            </Link>
          </Space>
          <Title level={3} style={{ margin: 0 }}>
            {routes.name}
          </Title>
        </Space>
      )}
    </>
  );
};

export default ExplorerNav;
