import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';

type Auth = {
  email: string;
  password: string;
};

const Register = () => {
  const { t } = useTranslation();

  const registerFinish = (values: Auth) => {
    console.log('Received values of form: ', values);
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
        <Input
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
