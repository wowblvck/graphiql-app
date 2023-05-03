import { Menu, Layout } from 'antd';
import { BookOutlined, HistoryOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const sideMenuItems = [
  {
    name: 'book',
    icon: <BookOutlined />,
  },
  {
    name: 'about',
    icon: <HistoryOutlined />,
  },
  {
    name: 'reload',
    icon: <ReloadOutlined />,
  },
  {
    name: 'settings',
    icon: <SettingOutlined />,
  },
];

const SideMenu = () => {
  return (
    <Sider collapsed={true}>
      <Menu
        theme="light"
        mode="inline"
        style={{ height: '100%' }}
        items={sideMenuItems.map((item) => {
          return {
            key: item.name,
            icon: item.icon,
          };
        })}
        onClick={({ key }) => console.log(key)}
      ></Menu>
    </Sider>
  );
};

export default SideMenu;
