import { Col, Row, Image, Typography, Grid } from 'antd';
import { participants } from '../../utils/participantsList';
import rsschoolLogo from '../../assets/icons/rsschool.png';

const { Link, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const Footer = () => {
  const { xs, sm } = useBreakpoint();
  return (
    <Row justify="space-between" style={{ padding: '15px' }} gutter={[10, xs ? 16 : 10]}>
      <Col
        xs={24}
        sm={4}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Link href="https://rs.school/" target="_blank">
          <Image
            src={rsschoolLogo}
            preview={false}
            height="20px"
            style={{ display: 'flex', alignItems: 'center' }}
          ></Image>
        </Link>
      </Col>
      <Col
        xs={24}
        sm={16}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography>
          <Paragraph>
            <ul
              style={{
                padding: '0',
                listStyleType: 'none',
                display: sm ? 'flex' : 'block',
                gap: '10px',
              }}
            >
              {participants.map((person) => {
                return (
                  <li key={person.id} style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                    <Link href={person.githubLink} target="_blank">
                      {person.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Paragraph>
        </Typography>
      </Col>
      <Col
        xs={24}
        sm={4}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        2023
      </Col>
    </Row>
  );
};

export default Footer;
