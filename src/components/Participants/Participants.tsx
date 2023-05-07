import { Participant } from './participants.types';
import { Card, Col, Row, Typography, Grid } from 'antd';
import { participants } from '../../utils/participantsList';

const { Title, Link } = Typography;
const { useBreakpoint } = Grid;

const Participants = () => {
  const { xs } = useBreakpoint();
  return (
    <section
      style={{
        display: 'flex',
        margin: '30px auto',
        alignItems: 'center',
        paddingBottom: '50px',
        flexDirection: 'column',
        backgroundColor: '#f0f5ff',
      }}
    >
      <Title level={2}>Developers</Title>
      <Row gutter={[24, 24]} justify="center">
        {participants.map((person: Participant) => {
          return (
            <Col xs={14} sm={7} md={7} lg={6} xl={5} key={person.id}>
              <Card
                hoverable
                style={{
                  width: '100%',
                  margin: '0 auto',
                  textAlign: 'center',
                  aspectRatio: 'auto',
                }}
                cover={
                  <img alt={person.name} src={person.img} style={{ filter: 'grayscale(100%)' }} />
                }
              >
                <Title
                  level={4}
                  style={{
                    marginTop: '0px',
                    // marginBottom: sm ? '-15px' : '0px',
                    height: xs ? 'fit-content' : '50px',
                  }}
                >
                  {person.name}
                </Title>
                <Title
                  level={5}
                  style={{
                    height: xs ? 'fit-content' : '70px',
                    marginTop: '-10px',
                  }}
                >
                  {person.role.map((role) => {
                    return (
                      <p key={role} style={{ margin: '3px' }}>
                        {role}
                      </p>
                    );
                  })}
                </Title>
                <Link href={person.githubLink} target="_blank">
                  GitHub
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Participants;
