import { Space } from 'antd';
import Participants from '@/components/Participants/Participants';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';

const WelcomePage = () => {
  return (
    <Space direction="vertical" size="small" style={{ display: 'flex' }}>
      <WelcomeSection />
      <Participants />
    </Space>
  );
};

export default WelcomePage;
