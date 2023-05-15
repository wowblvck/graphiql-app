import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Spin, notification } from 'antd';
import { useAppDispatch } from '@/store/store';
import { setUser } from '@/store/reducers/user/user.reducer';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/routes/router';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';

type Auth = {
  email: string;
  password: string;
};

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const loginFinish = ({ email, password }: Auth) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          dispatch(
            setUser({
              id: user.uid,
              email: user.email,
              token,
            })
          );
          navigate(Routes.Playground);
        });
      })
      .catch((error: FirebaseError) => {
        notification.error({
          message: t('auth.errors.type.login'),
          description: t(`auth.errors.${error.code}`),
          placement: 'bottomRight',
          duration: 3,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Form style={{ maxWidth: '300px' }} initialValues={{ remember: true }} onFinish={loginFinish}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: t('auth.login.required_email') as string }]}
      >
        <Input
          prefix={<UserOutlined />}
          type="email"
          placeholder={t('auth.login.placeholder_email') as string}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: t('auth.login.required_password') as string }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t('auth.login.placeholder_password') as string}
        />
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Spin
            size="default"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          />
        ) : (
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            {t('auth.login.login_btn')}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Login;
