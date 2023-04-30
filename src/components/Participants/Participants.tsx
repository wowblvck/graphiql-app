import { participants } from './participantsList';
import { Participant } from './participants.types';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Link } = Typography;

const Participants = () => {
  return (
    <section
      style={{
        backgroundColor: '#f0f5ff',
        paddingBottom: '50px',
        margin: '30px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Title level={2}>Developers</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
        {participants.map((person: Participant) => {
          return (
            <Col span={6} key={person.id}>
              <Card
                hoverable
                style={{ textAlign: 'center', width: '100%', aspectRatio: 'auto' }}
                cover={
                  <img alt={person.name} src={person.img} style={{ filter: 'grayscale(100%)' }} />
                }
              >
                <Title level={4} style={{ marginTop: '-10px' }}>
                  {person.name}
                </Title>
                <Title level={5} style={{ marginTop: '-10px', height: '45px' }}>
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
