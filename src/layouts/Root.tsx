import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const { Content } = Layout;

const Root = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Root;
