import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/store/store';
import { setUser } from '@/store/reducers/user/user.reducer';

type Auth = {
  email: string;
  password: string;
};

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const registerFinish = ({ email, password }: Auth) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
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
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Form
      style={{ maxWidth: '300px' }}
      initialValues={{ remember: true }}
      onFinish={registerFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: t('auth.register.required_email') as string }]}
      >
        <Input
          prefix={<UserOutlined />}
          type="email"
          placeholder={t('auth.register.placeholder_email') as string}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: t('auth.register.required_password') as string }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t('auth.register.placeholder_password') as string}
        />
      </Form.Item>
      <Form.Item
        name="check_password"
        rules={[{ required: true, message: t('auth.register.required_check_password') as string }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t('auth.register.placeholder_check_password') as string}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          {t('auth.register.register_btn')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
