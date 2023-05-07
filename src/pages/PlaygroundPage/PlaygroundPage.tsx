import Docs from '@/components/Docs/Docs';
import SideMenu from '@/components/SideMenu/SideMenu';
import { Layout, Row, Col } from 'antd';
import { BookOutlined, HistoryOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { SideMenuItemsType } from '@/types/side-menu.types';

const { Content } = Layout;

const sideMenuItems: SideMenuItemsType[] = [
  {
    name: 'docs',
    icon: <BookOutlined />,
    component: <Docs />,
  },
  {
    name: 'history',
    icon: <HistoryOutlined />,
    component: <h2>history</h2>,
  },
];

const PlaygroundPage = () => {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [element, setElement] = useState('');

  const getElementByClick = (key: string) => {
    setElement(key);
    // setIsOpen(!isOpen);
    if (key === 'docs') {
      setIsDocsOpen(!isDocsOpen);
      setIsHistoryOpen(false);
    }
    if (key === 'history') {
      setIsHistoryOpen(!isHistoryOpen);
      setIsDocsOpen(false);
    }
    console.log(key);
  };

  return (
    <Layout>
      <SideMenu items={sideMenuItems} handleClick={getElementByClick} />
      <Layout>
        <Content>
          <Row style={{ height: '100%' }}>
            <Col
              span={isDocsOpen || isHistoryOpen ? 24 : 0}
              style={{ minWidth: '200px' }}
              lg={{ span: isDocsOpen || isHistoryOpen ? 6 : 0 }}
            >
              {sideMenuItems.find((item) => item.name === element)?.component}
            </Col>
            <Col
              span={24}
              lg={isDocsOpen || isHistoryOpen ? 18 : 24}
              style={{
                padding: '10px',
              }}
            >
              <Row style={{ height: '100%' }}>
                <Col span={24} lg={12} style={{ backgroundColor: 'tomato', height: '100%' }}>
                  EDITOR
                </Col>
                <Col span={24} lg={12} style={{ backgroundColor: 'blue', height: '100%' }}>
                  Response
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PlaygroundPage;
