import WelcomeSection from '@/components/WelcomeSection/WelcomeSection';

const WelcomePage = () => {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
    >
      <WelcomeSection />
    </section>
  );
};

export default WelcomePage;
