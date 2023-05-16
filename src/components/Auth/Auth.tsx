import { useState } from 'react';
import { Layout, Typography } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import Login from './Login/Login';
import Register from './Register/Register';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './Auth.css';

const { Content } = Layout;
const { Link, Paragraph } = Typography;

enum FormStates {
  Login = 'login',
  Register = 'register',
}

const Auth = () => {
  const [formState, setFormState] = useState<FormStates>(FormStates.Login);
  const { t } = useTranslation();

  const changeFormState = () => {
    setFormState(formState === FormStates.Login ? FormStates.Register : FormStates.Login);
  };

  return (
    <SwitchTransition>
      <CSSTransition
        key={formState === FormStates.Login ? FormStates.Login : FormStates.Register}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Content
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 25px',
          }}
        >
          {formState === FormStates.Login ? <Login /> : <Register />}
          <Paragraph style={{ fontSize: '16px', textTransform: 'lowercase', margin: 0 }}>
            <Trans
              i18nKey={
                formState === FormStates.Login
                  ? 'auth.login.login_state'
                  : 'auth.register.register_state'
              }
              t={t}
              components={{
                State: (
                  <Link
                    style={{ fontSize: '16px', textTransform: 'lowercase' }}
                    onClick={changeFormState}
                  />
                ),
              }}
            />
          </Paragraph>
        </Content>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Auth;
