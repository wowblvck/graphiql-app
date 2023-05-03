import Docs from '@/components/Docs/Docs';
import SideMenu from '@/components/SideMenu/SideMenu';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const PlaygroundPage = () => {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Content>
          <Row style={{ height: '100%' }}>
            <Col span={8} style={{ minWidth: '200px' }}>
              <Docs />
            </Col>
            <Col span={16}>
              <div>EDITOR</div>
              <div>Response</div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PlaygroundPage;
