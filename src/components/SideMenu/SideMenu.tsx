import { SideMenuItemsType } from '@/types/side-menu.types';
import { Menu, Layout } from 'antd';
import { FC } from 'react';

const { Sider } = Layout;

type SideMenuProps = {
  items: SideMenuItemsType[];
  handleClick: (keys: string) => void;
};

const SideMenu: FC<SideMenuProps> = (props) => {
  const { items, handleClick } = props;

  return (
    <Sider collapsed={true}>
      <Menu
        theme="light"
        mode="inline"
        style={{ height: '100%' }}
        items={items.map((item) => {
          return {
            key: item.name,
            icon: item.icon,
          };
        })}
        onClick={({ key }) => handleClick(key)}
      ></Menu>
    </Sider>
  );
};

export default SideMenu;
