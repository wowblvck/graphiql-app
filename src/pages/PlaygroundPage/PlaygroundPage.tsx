import Docs from '@/components/Docs/Docs';
import SideMenu from '@/components/SideMenu/SideMenu';
import { Layout, Row, Col, Grid } from 'antd';
import { BookOutlined, HistoryOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { SideMenuItemsType } from '@/types/side-menu.types';

const { Content } = Layout;
const { useBreakpoint } = Grid;

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
  const { lg } = useBreakpoint();

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
      <Content style={{ display: 'flex' }}>
        <Row style={{ width: '100%' }}>
          <Col
            span={isDocsOpen || isHistoryOpen ? 24 : 0}
            lg={isDocsOpen || isHistoryOpen ? 6 : 0}
            style={{ height: lg ? '100%' : '250px', overflow: 'auto', paddingLeft: '5px' }}
          >
            {sideMenuItems.find((item) => item.name === element)?.component}
          </Col>
          <Col
            span={24}
            lg={isDocsOpen || isHistoryOpen ? 9 : 12}
            style={{ backgroundColor: 'tomato' }}
          >
            EDITOR
          </Col>
          <Col
            span={24}
            lg={isDocsOpen || isHistoryOpen ? 9 : 12}
            style={{ backgroundColor: 'blue' }}
          >
            Response
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PlaygroundPage;
