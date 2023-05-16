import { Button, Result } from 'antd';
import { Routes } from '@/routes/router';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Content } from 'antd/es/layout/layout';

const Page404 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Result
        status="404"
        title="404"
        subTitle={t('error404.title')}
        extra={
          <Button type="primary" onClick={() => navigate(Routes.Home)}>
            {t('error404.backHome')}
          </Button>
        }
      />
    </Content>
  );
};

export default Page404;
