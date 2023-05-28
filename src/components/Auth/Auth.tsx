import { useState } from 'react';
import { Space, Spin, Typography } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Login from './Login/Login';
import Register from './Register/Register';
import './Auth.css';
import { useAuth } from '@/hooks/useAuth';
import SuccessLogin from './SuccessLogin/SuccessLogin';

const { Link, Paragraph } = Typography;

enum FormStates {
  Login = 'login',
  Register = 'register',
}

const Auth = () => {
  const [formState, setFormState] = useState<FormStates>(FormStates.Login);
  const { isAuth, isLoading } = useAuth();
  const { t } = useTranslation();

  const changeFormState = () => {
    setFormState(formState === FormStates.Login ? FormStates.Register : FormStates.Login);
  };

  if (isLoading) return <Spin size="large" />;

  return (
    <>
      {isAuth ? (
        <SuccessLogin />
      ) : (
        <SwitchTransition>
          <CSSTransition
            key={formState === FormStates.Login ? FormStates.Login : FormStates.Register}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <Space
              direction="vertical"
              align="center"
              style={{ gap: '0', columnGap: '0', rowGap: '0' }}
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
            </Space>
          </CSSTransition>
        </SwitchTransition>
      )}
    </>
  );
};

export default Auth;
