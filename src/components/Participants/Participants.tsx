import { participants } from './participantsList';
import { Participant } from './participants.types';
import { Card, Col, Row, Space, Typography } from 'antd';

const { Title, Link } = Typography;

const Participants = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex', alignItems: 'center' }}>
      <Title level={3}>Developers</Title>
      <Row gutter={16}>
        {participants.map((person: Participant) => {
          return (
            <Col span={8} key={person.id}>
              <Card
                key={person.id}
                hoverable
                style={{ width: 240, height: 450, textAlign: 'center' }}
                cover={<img alt={person.name} src={person.img} />}
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
    </Space>
  );
};

export default Participants;
