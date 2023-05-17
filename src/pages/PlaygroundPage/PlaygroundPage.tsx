import Docs from '@/components/Docs/Docs';
import SideMenu from '@/components/SideMenu/SideMenu';
import { Layout, Row, Col, Grid } from 'antd';
import { BookOutlined } from '@ant-design/icons';
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
];

const PlaygroundPage = () => {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [element, setElement] = useState('');
  // const [docsNav, setDocsNav] = useState<string[]>([]);
  const { lg } = useBreakpoint();

  const getElementByClick = (key: string) => {
    setElement(key);
    if (key === 'docs') {
      setIsDocsOpen(!isDocsOpen);
    }
  };

  return (
    <Layout>
      <SideMenu items={sideMenuItems} handleClick={getElementByClick} />
      <Content style={{ display: 'flex' }}>
        <Row style={{ width: '100%' }}>
          <Col
            span={isDocsOpen ? 24 : 0}
            lg={isDocsOpen ? 6 : 0}
            style={{ height: lg ? '100%' : '250px', overflow: 'auto', paddingLeft: '5px' }}
          >
            {sideMenuItems.find((item) => item.name === element)?.component}
          </Col>
          <Col span={24} lg={isDocsOpen ? 9 : 12} style={{ backgroundColor: 'tomato' }}>
            EDITOR
          </Col>
          <Col span={24} lg={isDocsOpen ? 9 : 12} style={{ backgroundColor: 'blue' }}>
            Response
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default PlaygroundPage;
