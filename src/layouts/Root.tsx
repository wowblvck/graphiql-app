import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '@components/Header/Header';

const { Content, Footer } = Layout;

const Root = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ display: 'flex' }}>
        <Outlet />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Root;
