import { useState, Suspense, lazy, useContext, useEffect } from 'react';
import { SideMenuItemsType } from '@/types/side-menu.types';
import { Layout, Row, Col, Grid, Spin } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { HeightContext } from '@/contexts/HeightProvider';
import { useAppDispatch } from '@/store/store';
import { clearExplorer } from '@/store/reducers/explorer/explorer.reducer';
import ResponseIDE from '@/components/ResponseIDE/ResponseIDE';
import EditorIDE from '@/components/EditorIDE/EditorIDE';
import SideMenu from '@/components/SideMenu/SideMenu';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const Explorer = lazy(() => import('@components/Explorer/Explorer'));

const menuItems: SideMenuItemsType[] = [
  {
    name: 'docs',
    icon: <BookOutlined />,
    component: <Explorer />,
    isOpen: false,
  },
];

const PlaygroundPage = () => {
  const { headerHeight, footerHeight } = useContext(HeightContext);
  const { lg } = useBreakpoint();
  const [element, setElement] = useState('');
  const [sideMenuItems, setSideMenuItems] = useState([...menuItems]);
  const isOpen = sideMenuItems.find((item) => item.name === element)?.isOpen;
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearExplorer());
    };
  }, [dispatch]);

  const getElementByClick = (key: string) => {
    setElement(key);
    setSideMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.name === key ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };

  return (
    <Layout
      style={{ height: lg ? `calc(100vh - (${headerHeight}px + ${footerHeight}px))` : '100%' }}
    >
      <SideMenu items={sideMenuItems} handleClick={getElementByClick} />
      <Content style={{ backgroundColor: 'white' }}>
        <Row style={{ height: '100%' }}>
          {isOpen && (
            <Col
              span={24}
              lg={6}
              style={{
                height: lg ? '100%' : '250px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'auto',
              }}
            >
              <Suspense fallback={<Spin size="large" />}>
                {sideMenuItems.find((item) => item.name === element)?.component}
              </Suspense>
            </Col>
          )}
          <Col
            span={24}
            lg={isOpen ? 9 : 12}
            style={{
              padding: '10px',
            }}
          >
            <EditorIDE />
          </Col>
          <Col
            span={24}
            lg={isOpen ? 9 : 12}
            style={{
              padding: '10px',
            }}
          >
            <ResponseIDE />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PlaygroundPage;
