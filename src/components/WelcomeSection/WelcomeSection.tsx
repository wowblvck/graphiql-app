import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import rickAndMortyGif from '../../assets/img/rickmorty.gif';
import { Col, Image, Row, Button, Typography, Grid, Space } from 'antd';
import TranslationButtons from '../TranslationButtons/TranslationButtons';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;
const advantages = ['ask', 'get', 'describe'];

const WelcomeSection = () => {
  const { xs, xxl } = useBreakpoint();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: 'flex', margin: '35px auto', alignItems: 'center' }}
    >
      <TranslationButtons />
      <Title
        style={{
          fontSize: xxl ? '60px' : '36px',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        {t('welcomeSection.title')}
      </Title>
      <Title
        level={2}
        style={{
          fontSize: xxl ? '40px' : '24px',
          margin: '0 auto',
          textAlign: 'center',
          width: xs ? '90%' : '100%',
        }}
      >
        {t('welcomeSection.subtitle')}
      </Title>
      <Row justify="center">
        <Col xs={22} sm={20} md={16} lg={16} xl={14}>
          <Typography style={{ textAlign: 'center' }}>
            <Paragraph
              style={{
                fontSize: xxl ? '20px' : '14px',
              }}
            >
              {t('welcomeSection.description')}
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Typography>
            <Paragraph
              style={{
                fontSize: xxl ? '20px' : '14px',
              }}
            >
              <ul>
                {advantages.map((adv) => {
                  return (
                    <li key={adv}>
                      <Text
                        italic
                        style={{
                          fontSize: xxl ? '20px' : '14px',
                        }}
                      >
                        {t(`welcomeSection.advantages.${adv}`)}
                      </Text>
                    </li>
                  );
                })}
              </ul>
            </Paragraph>
          </Typography>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} sm={20} md={16} lg={16} xl={18}>
          <Image
            width="100%"
            src={rickAndMortyGif}
            preview={false}
            style={{
              boxShadow: '4px 4px 21px 1px rgba(34, 60, 80, 0.1)',
              aspectRatio: '1/1',
              borderRadius: '3%',
            }}
          />
        </Col>
      </Row>
      <Button
        type="primary"
        size="large"
        shape="round"
        style={{ margin: '50px auto 0', display: 'block' }}
        // onClick function will be changed after user registration added
        onClick={() => navigate('/about')}
      >
        {t('welcomeSection.getStarted')}
      </Button>
    </Space>
  );
};

export default WelcomeSection;
