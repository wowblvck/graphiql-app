import { useNavigate } from 'react-router-dom';
import { Col, Image, Row, Button, Typography, Grid, Space } from 'antd';
import rickAndMortyGif from '../../assets/img/rickmorty.gif';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const advantages = [
  {
    id: 0,
    text: 'Ask for what you need, get exactly that',
  },
  {
    id: 1,
    text: 'Get many resources in a single request',
  },
  {
    id: 2,
    text: 'Describe what’s possible with a type system',
  },
];

const WelcomeSection = () => {
  const { xs, xxl } = useBreakpoint();

  const navigate = useNavigate();
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: 'flex', margin: '35px auto', alignItems: 'center' }}
    >
      <Title
        style={{
          fontSize: xxl ? '60px' : '36px',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        Welcome to GraphiQL!
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
        GraphiQL is a playground/IDE for graphQL requests
      </Title>
      <Row justify="center" gutter={[16, 24]}>
        <Col xs={22} sm={20} md={16} lg={16} xl={14}>
          <Typography
            style={{
              margin: '0 auto',
            }}
          >
            <Paragraph
              style={{
                fontSize: xxl ? '20px' : '14px',
                textAlign: 'center',
              }}
            >
              This playground created as a result of the{' '}
              <Text
                strong
                style={{
                  fontSize: xxl ? '20px' : '14px',
                }}
              >
                final project on the React 2023 Q1 course by RS School.
              </Text>
              GraphiQL provides a complete and understandable description of the data in Rick and
              Morty API, gives you the power to ask for exactly what you need and nothing more,
              enables powerful developer tools.
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
                    <li key={adv.id}>
                      <Text
                        italic
                        style={{
                          fontSize: xxl ? '20px' : '14px',
                        }}
                      >
                        {adv.text}
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
        Get Started
      </Button>
    </Space>
  );
};

export default WelcomeSection;
