import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .email('auth.validator.invalid_email')
    .required('auth.validator.required_email'),
  password: yup
    .string()
    .required('auth.validator.required_password')
    .min(8, 'auth.validator.password.min_value')
    .matches(/[a-zA-Z]/, 'auth.validator.password.need_letter')
    .matches(/[0-9]/, 'auth.validator.password.need_digit')
    .matches(/[^a-zA-Z0-9]/, 'auth.validator.password.need_special')
    .test(
      'password',
      'Invalid password',
      (value) =>
        !value || (/(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])/.test(value) && value.length >= 8)
    ),
  check_password: yup
    .string()
    .oneOf([yup.ref('password')], 'auth.validator.password.must_match')
    .required('auth.validator.required_password'),
});

const authorizationSchema = yup.object().shape({
  email: yup
    .string()
    .email('auth.validator.invalid_email')
    .required('auth.validator.required_email'),
  password: yup.string().required('auth.validator.required_password'),
});

export { registrationSchema, authorizationSchema };
