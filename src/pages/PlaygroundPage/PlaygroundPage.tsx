import SideMenu from '@/components/SideMenu/SideMenu';
import { Layout, Row, Col, Grid, Spin } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { useState, Suspense, lazy } from 'react';
import { SideMenuItemsType } from '@/types/side-menu.types';
import DocsNav from '@/components/DocsNav/DocsNav';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const Docs = lazy(() => import('@components/Docs/Docs'));

const menuItems: SideMenuItemsType[] = [
  {
    name: 'docs',
    icon: <BookOutlined />,
    component: <Docs />,
    isOpen: false,
  },
];

const PlaygroundPage = () => {
  const [element, setElement] = useState('');
  const [sideMenuItems, setSideMenuItems] = useState([...menuItems]);
  const isOpen = sideMenuItems.find((item) => item.name === element)?.isOpen;
  const { lg } = useBreakpoint();

  const getElementByClick = (key: string) => {
    setElement(key);
    setSideMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.name === key ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
      )
    );
  };

  return (
    <Layout>
      <SideMenu items={sideMenuItems} handleClick={getElementByClick} />
      <Content style={{ display: 'flex' }}>
        <Row style={{ width: '100%' }}>
          <Col
            span={isOpen ? 24 : 0}
            lg={isOpen ? 6 : 0}
            style={{
              height: lg ? '100%' : '250px',
              overflow: 'auto',
              paddingLeft: '5px',
            }}
          >
            <Suspense fallback={<Spin size="large" />}>
              <DocsNav />
              {sideMenuItems.find((item) => item.name === element)?.component}
            </Suspense>
          </Col>
          <Col span={24} lg={isOpen ? 9 : 12} style={{ backgroundColor: 'tomato' }}>
            EDITOR
          </Col>
          <Col span={24} lg={isOpen ? 9 : 12} style={{ backgroundColor: 'blue' }}>
            Response
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PlaygroundPage;
