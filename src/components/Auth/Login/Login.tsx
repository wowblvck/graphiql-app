import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Spin, notification, message } from 'antd';
import { useAppDispatch } from '@/store/store';
import { setUser } from '@/store/reducers/user/user.reducer';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Routes } from '@/routes/router';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authorizationSchema } from '@/schema/form-validate.schema';

type AuthForm = {
  email: string;
  password: string;
};

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthForm>({
    mode: 'onChange',
    resolver: yupResolver(authorizationSchema),
  });

  const onSubmit: SubmitHandler<AuthForm> = (data) => {
    const { email, password } = data;
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          message.success({
            content: t('auth.login.success_message'),
            style: {
              marginTop: '10vh',
            },
          });
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
    <Form
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onSubmit)}
      style={{ maxWidth: '300px', width: '100%' }}
      size="large"
    >
      <Form.Item
        validateStatus={errors.email ? 'error' : 'success'}
        help={errors.email && t(`${errors.email.message}`)}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              prefix={<UserOutlined />}
              placeholder={t('auth.placeholder_email') as string}
            />
          )}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.password && 'error'}
        help={errors.password && t(`${errors.password.message}`)}
      >
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              prefix={<LockOutlined />}
              placeholder={t('auth.placeholder_password') as string}
            />
          )}
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
