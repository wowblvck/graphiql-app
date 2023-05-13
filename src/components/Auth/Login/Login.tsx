import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';

type Auth = {
  email: string;
  password: string;
};

const Login = () => {
  const { t } = useTranslation();

  const loginFinish = (values: Auth) => {
    console.log('Received values of form: ', values);
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
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          {t('auth.login.login_btn')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
