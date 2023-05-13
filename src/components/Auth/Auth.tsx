import { useState } from 'react';
import { Row, Col } from 'antd';
import { Trans } from 'react-i18next';
import Login from './Login/Login';
import Register from './Register/Register';

enum FormStates {
  Login = 'login',
  Register = 'register',
}

const Auth = () => {
  const [formState, setFormState] = useState<FormStates>(FormStates.Login);

  const changeFormState = () => {
    setFormState(formState === FormStates.Login ? FormStates.Register : FormStates.Login);
  };

  return (
    <Row justify="center" style={{ padding: '50px 0 50px' }}>
      <Col>
        {formState === FormStates.Login ? <Login /> : <Register />}
        <Trans
          i18nKey={
            formState === FormStates.Login
              ? 'auth.login.login_state'
              : 'auth.register.register_state'
          }
          components={{
            State: <a onClick={changeFormState} />,
          }}
        />
      </Col>
    </Row>
  );
};

export default Auth;
