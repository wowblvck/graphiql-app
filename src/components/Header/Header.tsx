import { useState } from 'react';
import { Affix, Menu, MenuTheme, Button, Grid } from 'antd';
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { routerLinks, Routes } from '@/routes/router';
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
        <Menu
          style={{ minWidth: 0, flex: 'auto' }}
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
        <Button
          size="middle"
          style={{ marginLeft: '30px' }}
          icon={!isAuth ? <LoginOutlined /> : <LogoutOutlined />}
          type="primary"
          onClick={() => (!isAuth ? navigate(Routes.Auth) : dispatch(removeUser()))}
        >
          {md ? (!isAuth ? t('auth.login_btn') : t('auth.logout_btn')) : ''}
        </Button>
      </Header>
    </Affix>
  );
};

export default _Header;
