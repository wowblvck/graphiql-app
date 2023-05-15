import { Content } from 'antd/es/layout/layout';
import Participants from '@/components/Participants/Participants';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';

const WelcomePage = () => {
  return (
    <Content>
      <WelcomeSection />
      <Participants />
    </Content>
  );
};

export default WelcomePage;
