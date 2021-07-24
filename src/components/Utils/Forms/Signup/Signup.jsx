import { Formik, Field, Form } from 'formik';
import { TextField, Button, makeStyles } from '@material-ui/core';

import './Signup.css';

const useStyles = makeStyles({
  label: { textTransform: 'none' },
});

const Signup = (props) => {
  const classes = useStyles();

  const reqOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  };

  const initialValues = {
    username: '',
    name: '',
    firstLastname: '',
    secondLastname: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <div className="Signup">
      <Formik
        initialValues={initialValues}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          fetch('http://192.168.0.110:3001/security/register', {
            ...reqOptions,
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((e) => console.log(e.message));
          // make async call
          console.log('Sending...');
          console.log(data);

          setSubmitting(false);
          console.log('Sent!');
        }}>
        {({ isSubmitting }) => (
          <Form>
            <h1>Signup</h1>
            <Field
              name="username"
              placeholder="username"
              type="input"
              as={TextField}
            />
            <div>
              <Field
                name="name"
                placeholder="name"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                name="firstLastname"
                placeholder="lastname"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                name="secondLastname"
                placeholder="second lastname"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                name="phone"
                placeholder="phone"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                name="password"
                placeholder="password"
                type="input"
                as={TextField}
              />
            </div>
            <div>
              <Field
                name="confirmPassword"
                placeholder="confirm password"
                type="input"
                as={TextField}
              />
            </div>
            {/* <div>
              // Admin should be the only one assigning roles
              <Field
                name="role"
                placeholder="role"
                type="input"
                as={TextField}
              />
            </div> */}
            <div>
              <Button
                classes={{ label: classes.label }}
                disabled={isSubmitting}
                type="submit">
                create
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

export default Signup;
