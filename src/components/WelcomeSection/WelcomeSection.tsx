import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import rickAndMortyGif from '../../assets/img/rickmorty.gif';
import { Col, Image, Row, Button, Typography, Grid, Space } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import { Routes } from '@/routes/router';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;
const advantages = ['ask', 'get', 'describe'];

const WelcomeSection = () => {
  const { xxl } = useBreakpoint();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
    <Row justify="center" style={{ padding: '35px 25px' }}>
      <Col>
        <Space direction="vertical" size="middle" align="center">
          <Title
            style={{
              fontSize: xxl ? '60px' : '36px',
              textAlign: 'center',
              margin: '0',
            }}
          >
            {t('welcomeSection.title')}
          </Title>
          <Title
            level={2}
            style={{
              fontSize: xxl ? '40px' : '24px',
              textAlign: 'center',
              margin: '0',
            }}
          >
            {t('welcomeSection.subtitle')}
          </Title>
          <Typography style={{ textAlign: 'center', maxWidth: '900px' }}>
            <Paragraph
              style={{
                fontSize: xxl ? '20px' : '14px',
              }}
            >
              {t('welcomeSection.description')}
            </Paragraph>
          </Typography>

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
          <Image
            width="100%"
            src={rickAndMortyGif}
            preview={false}
            style={{
              boxShadow: '4px 4px 21px 1px rgba(34, 60, 80, 0.1)',
              aspectRatio: '1/1',
              borderRadius: '3%',
              maxWidth: '400px',
              objectFit: 'cover',
            }}
          />
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{ marginTop: '50px' }}
            onClick={() => (!isAuth ? navigate(Routes.Auth) : navigate(Routes.Playground))}
          >
            {t('welcomeSection.getStarted')}
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default WelcomeSection;
