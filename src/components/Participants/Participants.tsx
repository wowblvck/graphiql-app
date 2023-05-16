import { useTranslation } from 'react-i18next';
import { Participant } from './participants.types';
import { Card, Col, Row, Typography, Grid, Space } from 'antd';
import { participants } from '../../utils/participantsList.ts';

const { Title, Link } = Typography;
const { useBreakpoint } = Grid;

const Participants = () => {
  const { md } = useBreakpoint();
  const { t } = useTranslation();
  return (
    <Row justify="center" style={{ backgroundColor: '#f0f5ff', padding: '35px 0' }}>
      <Col>
        <Space direction="vertical" size="large" align="center">
          <Title level={2} style={{ textAlign: 'center', margin: '0' }}>
            {t('developers.developers')}
          </Title>
          <Row
            gutter={[md ? 24 : 6, 24]}
            justify="center"
            style={{ marginLeft: 0, marginRight: 0 }}
          >
            {participants.map((person: Participant) => {
              return (
                <Col xs={14} sm={13} md={6} lg={6} xl={5} key={person.id}>
                  <Card
                    hoverable
                    size="small"
                    style={{
                      height: '100%',
                      textAlign: 'center',
                    }}
                    cover={
                      <img
                        alt={person.name}
                        src={person.img}
                        style={{ filter: 'grayscale(100%)' }}
                      />
                    }
                  >
                    <Space direction="vertical">
                      <Space
                        direction="vertical"
                        align="center"
                        style={{
                          height: md ? '111px' : 'auto',
                        }}
                      >
                        <Title
                          level={4}
                          style={{
                            margin: '0px',
                          }}
                        >
                          {t(`developers.names.${person.name}`)}
                        </Title>
                        <Title
                          level={5}
                          style={{
                            margin: '0px',
                          }}
                        >
                          {person.role.map((role) => {
                            return (
                              <p key={role} style={{ margin: '3px' }}>
                                {t(`developers.roles.${role}`)}
                              </p>
                            );
                          })}
                        </Title>
                      </Space>
                      <Link href={person.githubLink} target="_blank">
                        GitHub
                      </Link>
                    </Space>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default Participants;
