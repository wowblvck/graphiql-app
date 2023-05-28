import { useAuth } from '@/hooks/useAuth';
import { Routes } from '@/routes/router';
import { Button, Result, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth, isLoading } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (isLoading)
    return (
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Spin size="large"></Spin>
      </Content>
    );

  if (!isAuth) {
    return (
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Result
          status="403"
          title="403"
          subTitle={t('auth.errors.not_authorized')}
          style={{ padding: '25px 25px' }}
          extra={
            <Button type="primary" size="large" onClick={() => navigate(Routes.Auth)}>
              {t('auth.login_btn')}
            </Button>
          }
        />
      </Content>
    );
  }

  return isAuth && children;
};

export default RequireAuth;
