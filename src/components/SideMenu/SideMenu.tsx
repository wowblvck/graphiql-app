import { Menu } from 'antd';
import { BookOutlined, HistoryOutlined, ReloadOutlined, SettingOutlined } from '@ant-design/icons';

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
    <Menu
      theme="light"
      mode="inline"
      items={sideMenuItems.map((item) => {
        return {
          key: item.name,
          icon: item.icon,
        };
      })}
      onClick={({ key }) => console.log(key)}
      inlineCollapsed={true}
    ></Menu>
  );
};

export default SideMenu;
