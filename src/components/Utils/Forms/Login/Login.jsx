import { Formik, Field, Form } from 'formik';
// IMPORTANT: Check foormik documentation for more functions as resetForm!!!
import { TextField, Button } from '@material-ui/core';

import './Login.css';

const Login = (props) => {
  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  return (
    <div className="Login">
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          fetch('http://192.168.0.110:3001/', {
            ...reqOptions,
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((e) => console.log(e.message));
          // make async call
          console.log('Sending...');

          setSubmitting(false);
          console.log('Sent!');
        }}>
        {({ isSubmitting }) => (
          <Form>
            <h1>Login</h1>
            <Field
              name="username"
              placeholder="username"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                name="password"
                placeholder="password"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </div>
            {/* Use only for debbug */}
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
