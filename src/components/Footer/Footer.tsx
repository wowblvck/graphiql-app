import { useTranslation } from 'react-i18next';
import rsschoolLogo from '../../assets/icons/rsschool_white.png';
import { participants } from '../../utils/participantsList';
import { Col, Row, Image, Typography, Grid, Layout } from 'antd';
import TranslationButtons from '../TranslationButtons/TranslationButtons';
import { darkBlue, white } from '@/constants/colors';

const { Link, Paragraph } = Typography;
const { useBreakpoint } = Grid;
const { Footer } = Layout;

type FooterProps = {
  setRef: (node: HTMLDivElement | null) => void;
};

const _Footer: React.FC<FooterProps> = ({ setRef }) => {
  const { t } = useTranslation();
  const { xs } = useBreakpoint();
  return (
    <Footer
      ref={setRef}
      style={{
        backgroundColor: darkBlue,
        color: white,
        padding: '10px 30px',
      }}
    >
      <Row justify="space-between" gutter={[10, xs ? 16 : 10]} align={'middle'}>
        <Col xs={24} sm={24} md={6} style={{ textAlign: 'center' }}>
          <TranslationButtons />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row gutter={[10, xs ? 16 : 10]}>
            <Col span={24}>
              <ul
                style={{
                  padding: '0',
                  margin: '0',
                  listStyleType: 'none',
                  display: xs ? 'block' : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                {participants.map((person) => {
                  return (
                    <li key={person.id} style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                      <Typography>
                        <Paragraph style={{ margin: 0 }}>
                          <Link
                            href={person.githubLink}
                            target="_blank"
                            style={{
                              color: white,
                            }}
                          >
                            {t(`developers.names.${person.name}`)}
                          </Link>
                        </Paragraph>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              2023
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={6} style={{ textAlign: 'center' }}>
          <Link href="https://rs.school/" target="_blank">
            <Image src={rsschoolLogo} preview={false} height="20px" width="54px"></Image>
          </Link>
        </Col>
      </Row>
    </Footer>
  );
};

export default _Footer;
