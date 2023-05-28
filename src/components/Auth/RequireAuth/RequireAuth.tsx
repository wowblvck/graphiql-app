import { useAuth } from '@/hooks/useAuth';
import { Routes } from '@/routes/router';
import { Button, Result, Space, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const DEFAULT_COUNTDOWN = 5;

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth, isLoading } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN);

  useEffect(() => {
    let interval: number;
    if (!isAuth) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      if (countdown === 0) {
        clearInterval(interval);
        navigate(Routes.Home);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, navigate, isAuth]);

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
          subTitle={
            <Space direction="vertical">
              {t('auth.errors.not_authorized')}
              <Trans i18nKey="auth.not_authorized.title" values={{ countdown }} />
            </Space>
          }
          style={{ padding: '25px 25px' }}
          extra={
            <Space>
              <Button type="primary" size="large" onClick={() => navigate(Routes.Auth)}>
                {t('auth.login_btn')}
              </Button>
              <Button type="primary" size="large" onClick={() => navigate(Routes.Home)}>
                {t('auth.home_btn')}
              </Button>
            </Space>
          }
        />
      </Content>
    );
  }

  return isAuth && children;
};

export default RequireAuth;
