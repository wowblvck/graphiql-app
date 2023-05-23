import { Routes } from '@/routes/router';
import { Button, Result } from 'antd';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const DEFAULT_COUNTDOWN = 3;

const SuccessLogin = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(interval);
      navigate(Routes.Playground);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, navigate]);

  return (
    <Result
      status="success"
      title={t('auth.success.title')}
      subTitle={<Trans i18nKey="auth.success.subTitle" count={countdown} />}
      extra={[
        <Button type="primary" key="playground" onClick={() => navigate(Routes.Playground)}>
          {t('auth.success.button')}
        </Button>,
      ]}
    />
  );
};

export default SuccessLogin;
