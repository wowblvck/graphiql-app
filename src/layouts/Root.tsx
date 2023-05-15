import { useLocation, useOutlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './Root.css';

const Root = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
          {currentOutlet}
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </Layout>
  );
};

export default Root;
