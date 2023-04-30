import { Col, Image, Row, Button, Divider, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

const WelcomeSection = () => {
  const navigate = useNavigate();
  return (
    <Row justify="space-evenly" style={{ paddingTop: '45px' }}>
      <Col span={8} style={{ display: 'flex', justifyContent: 'end' }}>
        <Image width="100%" src="../src/assets/img/welcome-page-gif.gif" preview={false} />
      </Col>
      <Col span={13}>
        <Typography>
          <Title style={{ marginTop: '-10px' }}>Welcome to GraphiQL!</Title>
          <Title level={3} style={{ marginTop: '-10px' }}>
            GraphiQL is a playground/IDE for graphQL requests
          </Title>
          <Paragraph>
            This playground created as a result of the{' '}
            <Text strong>final project on the React 2023 Q1 course by RS School</Text>. GraphiQL
            provides a complete and understandable description of the data in *** API, gives you the
            power to ask for exactly what you need and nothing more, enables powerful developer
            tools.
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

          <Divider />
          <Button
            type="primary"
            size="large"
            shape="round"
            style={{ margin: '0 auto', display: 'block' }}
            // onClick function will be changed after user registration added
            onClick={() => navigate('/about')}
          >
            Get Started
          </Button>
        </Typography>
      </Col>
    </Row>
  );
};

export default WelcomeSection;
