import { useState } from 'react';
import { Affix, Menu, MenuTheme, Button, Grid } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { routerLinks } from '@/routes/router';
import { useTranslation } from 'react-i18next';
import { Header } from 'antd/es/layout/layout';
import { darkBlue, white } from '@/constants/colors';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useAppDispatch } from '@/store/store';
import { removeUser } from '@/store/reducers/user/user.reducer';

const { useBreakpoint } = Grid;

const _Header = () => {
  const [theme, setTheme] = useState<MenuTheme | undefined>('dark');
  const [menuColor, setMenuColor] = useState(darkBlue);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { md } = useBreakpoint();
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

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
        {!isAuth ? (
          <Button
            size="middle"
            icon={<LoginOutlined />}
            type="primary"
            onClick={() => navigate('/auth')}
          >
            {md ? t('auth.login_btn') : ''}
          </Button>
        ) : (
          <Button
            size="middle"
            icon={<LogoutOutlined />}
            type="primary"
            onClick={() => dispatch(removeUser())}
          >
            {md ? t('auth.logout_btn') : ''}
          </Button>
        )}
      </Header>
    </Affix>
  );
};

export default _Header;
