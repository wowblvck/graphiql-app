import Participants from '@/components/Participants/Participants';
import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';

const WelcomePage = () => {
  return (
    // <section
    //   style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}
    // >
    <>
      <WelcomeSection />
      <Participants />
    </>
  );
};

export default WelcomePage;
