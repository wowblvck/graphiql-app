import { Space, Layout } from 'antd';
import Participants from '@/components/Participants/Participants';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';

const { Content } = Layout;

const WelcomePage = () => {
  return (
    <Content>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <WelcomeSection />
        <Participants />
      </Space>
    </Content>
  );
};

export default WelcomePage;
