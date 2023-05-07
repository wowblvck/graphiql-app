import { useNavigate } from 'react-router-dom';
import { Col, Image, Row, Button, Typography, Grid } from 'antd';

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
  const { lg, xxl } = useBreakpoint();

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
      <Row justify="center" gutter={[16, 24]}>
        <Col
          xs={{ span: 20, order: 1 }}
          sm={{ span: 16, order: 1 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 6, order: 0 }}
          xl={{ span: 5, order: 0 }}
          className="col-1"
          style={{ display: 'flex', justifyContent: 'end' }}
        >
          <Image
            height="100%"
            src="../src/assets/img/rickmorty.gif"
            preview={false}
            style={{ boxShadow: '4px 4px 21px 1px rgba(34, 60, 80, 0.1)', aspectRatio: 'auto' }}
          />
        </Col>
        <Col
          xs={20}
          sm={20}
          md={20}
          lg={14}
          xl={14}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Typography>
            <Title
              style={{
                fontSize: xxl ? '60px' : '36px',
                marginTop: '-10px',
                textAlign: lg ? 'start' : 'center',
              }}
            >
              Welcome to GraphiQL!
            </Title>
            <Title
              level={2}
              style={{
                fontSize: xxl ? '40px' : '24px',
                marginTop: '-10px',
                textAlign: lg ? 'start' : 'center',
              }}
            >
              GraphiQL is a playground/IDE for graphQL requests
            </Title>
            <Paragraph
              style={{
                fontSize: xxl ? '20px' : '14px',
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
