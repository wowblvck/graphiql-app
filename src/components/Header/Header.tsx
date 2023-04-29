import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { routerLinks } from '@/routes/router';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const _Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        items={routerLinks.map((link) => {
          return {
            key: link.path,
            label: t(`navigation.link.${link.name}`),
            icon: link.icon,
          };
        })}
        onClick={({ key }) => navigate(key)}
      ></Menu>
    </Header>
  );
};

export default _Header;
