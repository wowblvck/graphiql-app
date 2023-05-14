import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const Root = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
};

export default Root;
