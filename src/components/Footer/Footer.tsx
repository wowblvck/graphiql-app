import { useTranslation } from 'react-i18next';
import rsschoolLogo from '../../assets/icons/rsschool.png';
import { participants } from '../../utils/participantsList';
import { Col, Row, Image, Typography, Grid, Layout, Space } from 'antd';
import TranslationButtons from '../TranslationButtons/TranslationButtons';

const { Link, Paragraph } = Typography;
const { useBreakpoint } = Grid;
const { Footer } = Layout;

const _Footer = () => {
  const { t } = useTranslation();
  const { xs, sm } = useBreakpoint();
  return (
    <Footer>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Row justify="space-between" gutter={[10, xs ? 16 : 10]} align={'middle'}>
          <Col xs={24} sm={6} style={{ textAlign: 'center' }}>
            <TranslationButtons />
          </Col>
          <Col xs={24} sm={12}>
            <ul
              style={{
                padding: '0',
                margin: 0,
                listStyleType: 'none',
                display: sm ? 'flex' : 'block',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {participants.map((person) => {
                return (
                  <li key={person.id} style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                    <Typography>
                      <Paragraph style={{ margin: 0 }}>
                        <Link href={person.githubLink} target="_blank">
                          {t(`developers.names.${person.name}`)}
                        </Link>
                      </Paragraph>
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col xs={24} sm={6} style={{ textAlign: 'center' }}>
            <Link href="https://rs.school/" target="_blank">
              <Image src={rsschoolLogo} preview={false} height="20px"></Image>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            2023
          </Col>
        </Row>
      </Space>
    </Footer>
  );
};

export default _Footer;