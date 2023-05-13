import { useState } from 'react';
import { Affix, Menu, MenuTheme, Button, Grid } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { routerLinks } from '@/routes/router';
import { useTranslation } from 'react-i18next';
import { Header } from 'antd/es/layout/layout';
import { darkBlue, white } from '@/constants/colors';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const { useBreakpoint } = Grid;

const _Header = () => {
  const [theme, setTheme] = useState<MenuTheme | undefined>('dark');
  const [menuColor, setMenuColor] = useState(darkBlue);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { md } = useBreakpoint();

  return (
    <Affix
      target={() => window}
      onChange={(affixed?: boolean) => {
        if (affixed) {
          setTheme('light');
          setMenuColor(white);
        } else {
          setTheme('dark');
          setMenuColor(darkBlue);
        }
      }}
    >
      <Header
        style={{
          backgroundColor: `${menuColor}`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="logo" />
        <Menu
          style={{ width: '100%' }}
          theme={theme}
          mode="horizontal"
          defaultSelectedKeys={[location.pathname || 'none']}
          selectedKeys={[location.pathname || 'none']}
          items={routerLinks.map((link) => {
            return {
              key: link.path,
              label: t(`navigation.link.${link.name}`),
              icon: link.icon,
            };
          })}
          onClick={({ key }) => navigate(key)}
        ></Menu>
        <Link to="/auth" style={{ display: 'flex' }}>
          {md ? (
            <Button type="primary">{t('auth.button')}</Button>
          ) : (
            <LoginOutlined style={{ fontSize: '24px' }} />
          )}
        </Link>
      </Header>
    </Affix>
  );
};

export default _Header;
