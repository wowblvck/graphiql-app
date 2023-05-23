import { Suspense, lazy, useState } from 'react';
import { Affix, Menu, MenuTheme } from 'antd';
import { routerLinks } from '@/routes/router';
import { useTranslation } from 'react-i18next';
import { Header } from 'antd/es/layout/layout';
import { darkBlue, white } from '@/constants/colors';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthButton = lazy(() => import('@components/Auth/AuthButton/AuthButton'));

const _Header = () => {
  const [theme, setTheme] = useState<MenuTheme | undefined>('dark');
  const [menuColor, setMenuColor] = useState(darkBlue);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <Suspense>
          <AuthButton />
        </Suspense>
      </Header>
    </Affix>
  );
};

export default _Header;
