import Auth from '@/components/Auth/Auth';
import { Content } from 'antd/es/layout/layout';

const AuthPage = () => {
  return (
    <Content
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Auth />
    </Content>
  );
};

export default AuthPage;
