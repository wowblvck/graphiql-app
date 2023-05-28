import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Spin, message, notification } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/store/store';
import { setUser } from '@/store/reducers/user/user.reducer';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '@/schema/form-validate.schema';
import { useState } from 'react';

type RegisterForm = {
  email: string;
  password: string;
  check_password: string;
};

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: 'onChange',
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    const { email, password } = data;
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          message.success({
            content: t('auth.register.success_message'),
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
        });
      })
      .catch((error) => {
        notification.error({
          message: t('auth.errors.type.register'),
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
      style={{ width: '300px' }}
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
      <Form.Item
        validateStatus={errors.check_password && 'error'}
        help={errors.check_password && t(`${errors.check_password.message}`)}
      >
        <Controller
          name="check_password"
          control={control}
          render={({ field }) => (
            <Input.Password
              {...field}
              prefix={<LockOutlined />}
              placeholder={t('auth.register.placeholder_check_password') as string}
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
            {t('auth.register.register_btn')}
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default Register;
