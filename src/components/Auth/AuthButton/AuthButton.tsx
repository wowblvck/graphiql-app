import { Routes } from '@/routes/router';
import { ExclamationCircleFilled, LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Modal, message, Grid } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';

const { confirm } = Modal;
const { useBreakpoint } = Grid;

const AuthButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { md } = useBreakpoint();
  const { isAuth, isLoading } = useAuth();

  const showConfirm = () => {
    confirm({
      title: t('auth.logout.modal.title'),
      icon: <ExclamationCircleFilled />,
      content: t('auth.logout.modal.content'),
      okText: t('auth.logout.modal.confirm'),
      cancelText: t('auth.logout.modal.cancel'),
      centered: true,
      onOk() {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            message.success({
              content: t('auth.logout.success_message'),
              style: {
                marginTop: '10vh',
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    });
  };

  return (
    <Button
      size="middle"
      style={{ marginLeft: '30px' }}
      icon={!isAuth ? <LoginOutlined /> : <LogoutOutlined />}
      type="primary"
      loading={isLoading}
      onClick={() => (!isAuth ? navigate(Routes.Auth) : showConfirm())}
    >
      {md &&
        (isLoading ? t('auth.loading_btn') : !isAuth ? t('auth.login_btn') : t('auth.logout_btn'))}
    </Button>
  );
};

export default AuthButton;
