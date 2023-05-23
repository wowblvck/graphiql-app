import { Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';

const Auth = lazy(() => import('@components/Auth/Auth'));

const AuthPage = () => {
  const { t } = useTranslation();
  return (
    <Content
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Suspense fallback={<Spin tip={t('loading.message_2')} size="large" />}>
        <Auth />
      </Suspense>
    </Content>
  );
};

export default AuthPage;
