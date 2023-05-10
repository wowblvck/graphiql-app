import { Col, Row, Image, Typography, Grid } from 'antd';
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
            src="../src/assets/icons/rsschool.png"
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
            {/* this section will be changed after welcome page merging with develop */}
            <ul
              style={{
                padding: '0',
                listStyleType: 'none',
                display: sm ? 'flex' : 'block',
                gap: '10px',
              }}
            >
              <li style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                <Link href="https://github.com/wowblvck" target="_blank">
                  Indar Basto
                </Link>
              </li>
              <li style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                <Link href="https://github.com/ViktorMinkov" target="_blank">
                  Viktor Minkov
                </Link>
              </li>
              <li style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                <Link href="https://github.com/RallyZK" target="_blank">
                  Railia Balakaeva
                </Link>
              </li>
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
