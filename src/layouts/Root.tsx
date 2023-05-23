import { useLocation, useOutlet } from 'react-router-dom';
import { Grid, Layout } from 'antd';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './Root.css';

const Root = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { useBreakpoint } = Grid;
  const { lg } = useBreakpoint();

  return (
    <Layout style={{ minHeight: lg ? '100vh' : '150vh' }}>
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
