type Router =
  | {
      name: string;
      path: string;
      isPrivate: true;
      isVisible: boolean;
      icon?: React.ReactElement;
    }
  | {
      name: string;
      path: string;
      isPrivate: false;
      isVisible?: boolean;
      icon?: React.ReactElement;
    };

export default Router;
