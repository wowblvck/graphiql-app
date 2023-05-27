import { useLocation, useOutlet } from 'react-router-dom';
import { Layout } from 'antd';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './Root.css';
import { useElementSize } from 'usehooks-ts';
import HeightProvider from '@/contexts/HeightProvider';

const Root = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const [headerRef, { height: headerHeight }] = useElementSize();
  const [footerRef, { height: footerHeight }] = useElementSize();

  return (
    <Layout className="root-layout">
      <Header setRef={headerRef} />
      <SwitchTransition>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
          <HeightProvider headerHeight={headerHeight} footerHeight={footerHeight}>
            {currentOutlet}
          </HeightProvider>
        </CSSTransition>
      </SwitchTransition>
      <Footer setRef={footerRef} />
    </Layout>
  );
};

export default Root;
