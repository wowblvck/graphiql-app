import { useState } from 'react';
import { Row, Col, Layout } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import Login from './Login/Login';
import Register from './Register/Register';

const { Content } = Layout;

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
    <Content style={{ display: 'flex', justifyContent: 'center' }}>
      <Row justify="center" style={{ padding: '50px 0 50px' }} align="middle">
        <Col>
          {formState === FormStates.Login ? <Login /> : <Register />}
          <Trans
            i18nKey={
              formState === FormStates.Login
                ? 'auth.login.login_state'
                : 'auth.register.register_state'
            }
            t={t}
            components={{
              State: <a onClick={changeFormState} />,
            }}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default Auth;
