import { useLocation, useOutlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import Footer from '@components/Footer/Footer';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './Root.css';
import { useElementSize } from 'usehooks-ts';
import HeightProvider from '@/contexts/HeightProvider';
import { Suspense, lazy } from 'react';

const { Content } = Layout;

const Header = lazy(() => import('@components/Header/Header'));

const Root = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const [headerRef, { height: headerHeight }] = useElementSize();
  const [footerRef, { height: footerHeight }] = useElementSize();

  return (
    <Layout className="root-layout">
      <Header setRef={headerRef} />
      <Suspense
        fallback={
          <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spin size="large" />
          </Content>
        }
      >
        <SwitchTransition>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
            <HeightProvider headerHeight={headerHeight} footerHeight={footerHeight}>
              {currentOutlet}
            </HeightProvider>
          </CSSTransition>
        </SwitchTransition>
      </Suspense>
      <Footer setRef={footerRef} />
    </Layout>
  );
};

export default Root;
