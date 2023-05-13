import { useTranslation } from 'react-i18next';
import { Participant } from './participants.types';
import { Card, Col, Row, Typography, Grid } from 'antd';
import { participants } from '../../utils/participantsList.ts';

const { Title, Link } = Typography;
const { useBreakpoint } = Grid;

const Participants = () => {
  const { sm, md } = useBreakpoint();
  const { t } = useTranslation();
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '50px',
        flexDirection: 'column',
        backgroundColor: '#f0f5ff',
      }}
    >
      <Title level={2}>{t('developers.developers')}</Title>
      <Row gutter={[md ? 24 : 6, 24]} justify="center" style={{ marginLeft: 0, marginRight: 0 }}>
        {participants.map((person: Participant) => {
          return (
            <Col xs={14} sm={13} md={6} lg={6} xl={5} key={person.id}>
              <Card
                hoverable
                size="small"
                style={{
                  width: '100%',
                  margin: '0 auto',
                  textAlign: 'center',
                }}
                cover={
                  <img alt={person.name} src={person.img} style={{ filter: 'grayscale(100%)' }} />
                }
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
                    height: sm ? '80px' : 'auto',
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
