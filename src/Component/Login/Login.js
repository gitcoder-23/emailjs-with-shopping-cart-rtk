import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';
const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'The password must be between 8 and 20 characters.')
    .max(20, 'The password must be between 8 and 20 characters.!')
    .required('This field is required!'),
  email: Yup.string()
    .email('This is not a valid email.')
    .required('This field is required!'),
});
const loginPageStyle = {
  margin: '60px auto 40px',
  maxWidth: '400px',
  background: '#3bc7d1',
  padding: '30px',
  borderRadius: '10%',
  minHeight: '450px',
  boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.15)',
};
const submitStyle = {
  margin: '0px auto',
  padding: '7px 10px',

  borderRadius: '10px',
  background: '#213033',
  fontSize: '20px',
  color: 'white',
  display: 'block',
  alignItems: 'center',
  marginTop: '30px',
  width: '50%',
  boxShadow: '0px 0px 10px 10px rgba(8,8,8,.40)',
};

const inputStyle = {
  margin: '10px 0 0 10px',
  fontfamily: 'inherit',
  background: '#fff',
  padding: '5px',
  borderRadius: '5px',
  width: '100%',
  border: '1px solid #ced4da',
};
const errorStyle = {
  margin: '0 0 0 10px',
  fontfamily: 'inherit',
  background: '#f8d7da',
  padding: '20px',
  borderRadius: '5px',
  width: '100%',
  padding: '20px',
  color: '#842029',
};

const input1Style = {
  margin: '10px 0 0 10px',
  fontfamily: 'inherit',
  background: '#fff',
  padding: '5px',
  borderRadius: '5px',
  width: '90%',
  border: '1px solid #ced4da',
};
const error1Style = {
  margin: '0 0 0 10px',
  fontfamily: 'inherit',
  background: '#f8d7da',
  padding: '20px',
  borderRadius: '5px',
  width: '90%',
  padding: '20px',
  color: '#842029',
};

const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form style={loginPageStyle}>
              <h1 style={{ textAlign: 'center' }}>Sign In</h1>
              <label>
                Email:
                <Field type="email" name="email" style={inputStyle} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                  style={errorStyle}
                />
              </label>
              <label>
                Password:
                <Field type="password" name="password" style={input1Style} />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                  style={error1Style}
                />
              </label>
              <p className="font-small blue-text d-flex justify-content-end">
                Forgot
                <a
                  href="#!"
                  className="font-small blue-text ml-1 font-weight-bold"
                >
                  Password?
                </a>
              </p>
              <button type="submit" style={submitStyle} disabled={isSubmitting}>
                Submit
              </button>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <button
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <span
                    fab
                    icon="facebook-f"
                    className="blue-text text-center"
                  />
                </button>
                <button
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <span fab icon="twitter" className="blue-text" />
                </button>
                <button
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <span fab icon="google-plus-g" className="blue-text" />
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
