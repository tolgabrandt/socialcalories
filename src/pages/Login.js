import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContex';
import useLogin from '../helpers/hooks/useLogin';

const Login = () => {
  const { isPending, error } = useContext(AuthContext);
  const { login } = useLogin();
  return (
    <Formik
      initialValues={{ displayName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values) => {
        login(values.email, values.password);
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <Form className="flex flex-col gap-2">
          <div className="flex flex-col max-w-[340px] gap-2">
            <Field name="email" type="email" placeholder="E-Posta adresi" />
            <div className="h-2 flex items-center text-sm text-red-500">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="flex flex-col max-w-[340px] gap-2">
            <Field name="password" type="password" placeholder="Şifre" />
            <div className="h-2 flex items-center text-sm text-red-500">
              <ErrorMessage name="password" />
            </div>
          </div>
          <button className="flex items-center gap-4 justify-center">
            {!isPending && <span>Giriş Yap</span>}
            {isPending && <div className="loading" />}
          </button>
          {error && <div>{error}</div>}
          <div>
            <span> Henüz bir hesabınız yok mu? </span>
            <Link className="text-emerald-500" to="/register">
              Üye ol!
            </Link>
        
          </div>
        </Form>
      </div>
    </Formik>
  );
};
export default Login;
