import { Col, Image, Row, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const WelcomeSection = () => {
  const navigate = useNavigate();
  return (
    <section
      style={{
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={2} sm={4} md={8} lg={8} xl={9} style={{ display: 'flex', justifyContent: 'end' }}>
          <Image
            height="100%"
            src="../src/assets/img/welcome-page-gif.gif"
            preview={false}
            style={{ boxShadow: '4px 4px 21px 1px rgba(34, 60, 80, 0.1)', aspectRatio: 'auto' }}
          />
        </Col>
        <Col
          xs={20}
          sm={16}
          md={12}
          lg={10}
          xl={9}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography>
            <Title style={{ marginTop: '-10px' }}>Welcome to GraphiQL!</Title>
            <Title level={3} style={{ marginTop: '-10px' }}>
              GraphiQL is a playground/IDE for graphQL requests
            </Title>
            <Paragraph>
              This playground created as a result of the{' '}
              <Text strong>final project on the React 2023 Q1 course by RS School</Text>. GraphiQL
              provides a complete and understandable description of the data in *** API, gives you
              the power to ask for exactly what you need and nothing more, enables powerful
              developer tools.
            </Paragraph>

            <Paragraph>
              <ul>
                <li>
                  <Text italic>Ask for what you need, get exactly that</Text>
                </li>
                <li>
                  <Text italic>Get many resources in a single request</Text>
                </li>
                <li>
                  <Text italic>Describe what’s possible with a type system</Text>
                </li>
              </ul>
            </Paragraph>
          </Typography>
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
    </section>
  );
};

export default WelcomeSection;
